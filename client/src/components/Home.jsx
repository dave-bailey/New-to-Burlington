import React from "react";
import Map from "./Map.js";

//Home page - header and renders map component with burlington coordinates

export default function Home(props) {
  let markerList = props.markerList;
  return (
    <>
      <div id="homeBody">
        <h1 id="header">Restaurants I have been to in Burlington, VT!</h1>
        <Map markerList={markerList} />
      </div>
    </>
  );
}
