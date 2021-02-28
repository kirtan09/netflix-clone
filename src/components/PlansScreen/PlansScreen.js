import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./PlansScreen.scss";

function PlansScreen() {
  const [products, setProducts] = useState([]);

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

  console.log(products);
  return (
    <div className="plansScreen">
      {/* map the products object entries, gets the key and value pairs */}
      {/* .map() map through and destructure the array */}
      {Object.entries(products).map(([productId, productData]) => {
        // TODO add logic to check if user's subscription is active...
        return (
          <div className="plansScreenPlan" key={productId}>
            <div className="plansScreenInfo">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
