import "./App.scss";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import LoginScreen from "./components/LandingPage/LandingPage";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile" component={ProfileScreen} />
            <Route exact path="/" component={HomeScreen} />
            <Redirect to="/" />
          </Switch>
        )}
      </Router>
    </div>
  );
}
