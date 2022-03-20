import React from "react";
import Map from "./Map.js";

//Home page - header and renders map component with burlington coordinates

export default function Home() {
  return (
    <>
      <div id="homeBody">

      <h1 id="header">Restaurants I have been to in Burlington, VT!</h1>

      <Map center={[44.4759, -73.2121]} />

      </div>

    </>
  );
}
