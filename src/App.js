import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import firebase from "firebase";
import "firebase/auth";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import { useState } from "react";
import Footer from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import firebaseConfig from "./Config/FireBaseConfig";

// initialisation firbase

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <ToastContainer />
        <UserContext.Provider value={{ user, setUser }}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
