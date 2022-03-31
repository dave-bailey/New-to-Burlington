import React from "react";
import { Link } from "react-router-dom";

import "./NavComponent.css";

export default function NavComponent(props) {
  //props contain array of styled navigation links from json get request
  let navList = props.navList;
  return (
    <>
      <nav>
        {/* declaring a home route and rendering navlist */}
        <ul id="navGroup">
          <li>
            <Link className="homeLink" to="/">
              Home
            </Link>
          </li>
          <div className="restaurantLinkContainer">
          {navList}
          </div>
        </ul>
      </nav>
    </>
  );
}
