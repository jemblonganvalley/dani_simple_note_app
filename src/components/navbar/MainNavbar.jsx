import React from "react";
import "./MainNavbar.css";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav className="mainNavbar">
      <h1 className="brand">Jvalley</h1>

      <ul className="menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
