import React from "react";
import "./App.css";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import { Router, Routes } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="/Login" exact Component={Login} />
        <Route path="/CreateAccount" exact Component={CreateAccount} />
      </Routes>
    </>
  );
}

export default App;
