import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Home.css"

//Home page - header and renders map component with burlington coordinates
export default function Home({ markerList, setNavOpen }) {
  let openNav = () => {
    setNavOpen(true);
  };

  return (
    <>
      <div className="restaurantsBody">
        <div className="contentContainer">
          <div className="headerContainer">
            <div className="titleContainer">
              <h1 className="header">Burlington, VT!</h1>
            </div>
          </div>

          <div className="buttonContainer">
            <div className="buttonTitleContainer">
              <button className="button" onClick={openNav}></button>
              <h2 className="homeButtonTitle">restaurant list</h2>
            </div>
          </div>


        <div className="homeSubhead">Check out my favorite restaurants!</div>

        </div>
        {/* 
        <Map markerList={markerList} /> */}
        <div className="mapContainer">
          {markerList.length && (
            <MapContainer
              className="map"
              center={[44.4759, -73.2121]} //Burlington, VT
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* list of restaurant markers */}
              <ul>{markerList}</ul>
            </MapContainer>
          )}
        </div>

        <div className="mobileFooter">
          <h3>dave's restaurant blog</h3>
        </div>
      </div>
    </>
  );
}
