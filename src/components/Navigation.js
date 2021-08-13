import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link className="nav__home" to="/">
        Home
      </Link>
      <Link
        className="nav__about"
        to={{
          pathname: "/about",
          state: { fromNavigation: true },
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
