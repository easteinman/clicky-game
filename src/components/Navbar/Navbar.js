import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <Link className="navbar-brand col-sm-3" to="/">
      Kubrick Clicky
    </Link>
    <div class="alert col-sm-6">
      <p class="animated infinite flash">{props.Alert}</p>
    </div>
    <div class="scores col-sm-3">
      <p>Current Score: {props.Score} | Top Score: {props.topScore}</p>
    </div>
  </nav>
);

export default Navbar;
