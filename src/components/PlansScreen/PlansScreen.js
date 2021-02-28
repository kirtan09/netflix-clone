import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import {
  getSubscription,
  setSubscription,
} from "../../features/subscriptionSlice";
import db from "../../firebase";
import "./PlansScreen.scss";
import { loadStripe } from "@stripe/stripe-js";

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const subscription = useSelector(getSubscription);
  const dispatch = useDispatch();

  useEffect(() => {
    //get the customers collection
    db.collection("customers")
      //get doc of the current user by id
      .doc(user.uid)
      //get the sub collection subscriptions
      .collection("subscriptions")
      .get()
      //get query snapshot
      .then((querySnapshot) => {
        //for each subscription in query snapshot
        querySnapshot.forEach(async (subscription) => {
          //set the subscription to an object
          dispatch(
            setSubscription({
              role: subscription.data().role,
              current_period_end: subscription.data().current_period_end
                .seconds,
              current_period_start: subscription.data().current_period_start
                .seconds,
            })
          );
        });
      });
  }, [user.uid, dispatch]);

  useEffect(() => {
    //get the products collection from firebase
    db.collection("products")
      //filter by products are active
      .where("active", "==", true)
      //get the products, use onSnapshot for realtime - not needed here
      .get()
      //the query snapshot
      .then((querySnapshot) => {
        // empty products object
        const products = {};
        //get the product doc and for each one populate products object
        querySnapshot.forEach(async (productDoc) => {
          // set id to the data inside product doc
          products[productDoc.id] = productDoc.data();
          // get the inner collection of prices
          const priceSnap = await productDoc.ref.collection("prices").get();
          //if there is more than 1 price, for each one, get the price info
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
    return () => {};
  }, []);

  const loadCheckout = async (priceId) => {
    // get ref to user doc ref
    const docRef = await db
      .collection("customers")
      //logged in user
      .doc(user.uid)
      //get the checkout sessions collection for the user
      .collection("checkout_sessions")
      //ad the price to the checkout sessions
      .add({
        price: priceId,
        //return to current window on success or cancel
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    //destructure from the snapshot
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        // show an error to your customer and
        //inspect your cloud function logs in the firebase console
        alert("An error occured: ", error.message);
      }
      if (sessionId) {
        // we have a session, lets redirect to checkout
        // init stripe
        const stripe = await loadStripe(
          `pk_test_51IPfp2HYS9lEnzuMQR5T3xnthB7zuFhDgqDUf5OFGkF3nGj1TF3wGN9190aHyncqSqkjIsOn3fl3ZCdkqwrPBUVZ00PFywET4j`
        );
        // redirect with sessionId from snapshot
        stripe.redirectToCheckout({ sessionId: sessionId });
      }
    });
  };

  console.log(products);
  console.log(subscription);

  return (
    <div className="plansScreen">
      <br />
      {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {/* map the products object entries, gets the key and value pairs */}
      {/* .map() map through and destructure the array */}
      {Object.entries(products).map(([productId, productData]) => {
        // check if user's subscription is active...
        //check if the name of the product matches the role (check casing)
        const isCurrentPlan = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        return (
          <div
            className={`${
              isCurrentPlan && "plansScreenPlanDisabled"
            } plansScreenPlan`}
            key={productId}
          >
            <div className="plansScreenInfo">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPlan && loadCheckout(productData.prices.priceId)
              }
            >
              {!isCurrentPlan ? "Subscribe" : "Current Plan"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
