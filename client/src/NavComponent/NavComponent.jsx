import React from "react";

import "./NavComponent.css";

export default function NavComponent({navList, home, closeX}) {
  return (
    <>
      <nav className="nav">
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
