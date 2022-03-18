import React from "react";
import Map from "./Map.js";
import "./Home.css"


export default function NavComponent() {
  return (
    <>
      <div id="homeBody">

      <h1 id="header">Restaurants I have been to in Burlington, VT!</h1>

      <Map center={[44.4759, -73.2121]} />

      </div>

    </>
  );
}
