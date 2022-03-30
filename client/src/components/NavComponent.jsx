import React from "react";
import "./NavComponent.css";

//Nav bar with router links

export default function NavComponent(props) {
  let navList = props.navList;
  return (
    <>
      <nav>
        <ul id="navGroup">{navList}</ul>
      </nav>
    </>
  );
}
