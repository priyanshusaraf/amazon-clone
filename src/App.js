import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
import Home from "./Components/Home";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Checkout from "./Components/Checkout";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";

const promise = loadStripe(
  "pk_test_51HPuHGCRURkjErYIZY3qRsSX7VyH3icO6ELSy3qVmvxDmVKQoXXXoeHuXslnOB9ERKCaWIqyyA6wKhDVKImwLQPq00drcxSYGm"
);
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user has beem logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        return () => {
          //any cleanup processes come here;
          unsubscribe();
        };
      }
    });
  }, []);

  console.log("user is >>>>>>", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
