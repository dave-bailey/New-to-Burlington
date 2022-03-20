import React from "react";
import { Link } from "react-router-dom";
import "./NavComponent.css";

//Nav bar with router links

export default function NavComponent() {
  return (
    <>
      <nav>
        <div id="navGroup">
          <Link className="navLinks" to="/">
            Home
          </Link>
          <Link className="navLinks" to="pingala">
            Pingala Cafe
          </Link>
          <Link className="navLinks" to="hen-of-the-wood">
            Hen of the Wood
          </Link>
          <Link className="navLinks" to="nomad-coffee">
            Nomad Cofee
          </Link>
          <Link className="navLinks" to="dobra-tea">
            Dobra Tea
          </Link>
          <Link className="navLinks" to="farmhouse-tap-and-grill">
            Farmhouse Tap and Grill
          </Link>
        </div>
      </nav>
    </>
  );
}
