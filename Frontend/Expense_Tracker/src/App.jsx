import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboared/Home";
import Income from "./pages/Dashboared/Income";
import Expense from "./pages/Dashboared/Expense";

import { div } from "three/tsl";
const App = () =>{
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element ={<Login />} />
          <Route path="/signup" exact element ={<SignUp />} />
          <Route path="/dashboard" exact element ={<Home />} />
          <Route path="/income" exact element ={<Income />} /><Route path="/Expense" exact element ={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;


const Root = () => {

// Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");
  // Redirect to dashboard if authenticated, otherwise to login
    return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to = "/login" />
  );
};