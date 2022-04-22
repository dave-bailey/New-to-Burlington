import React from "react";
// import { Link } from "react-router-dom";

import "./NavComponent.css";

export default function NavComponent({navList, home, closeX}) {


  return (
    <>
      <nav className="nav">
        {/* declaring a home route and rendering navlist */}

        <ul>
          <div className="navGroup">
          <div className="homeContainer">
          {home}
            <div className="closeX">
              {closeX}
            </div>
          </div>
          <div className="restaurantLinkContainer">
          {navList}
          </div>
          </div>
        </ul>
      </nav>
    </>
  );
}
