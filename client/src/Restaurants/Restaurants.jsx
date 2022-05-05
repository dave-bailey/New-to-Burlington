import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import "./Restaurants.css";

export default function Restaurants({restaurants, setNavOpen}) {

  let openNav = () => {
    setNavOpen(true);
  }

  //filters restaurant data to find parameter that matches to render as content in component
  let { id } = useParams();

  let currentRestaurant = restaurants.filter((restaurant) => {
    return restaurant.id === id;
  });

  //variable used to avoid undefined map rendering error 
  let latLong = [
    currentRestaurant[0]?.latitude,
    currentRestaurant[0]?.longitude,
  ];

  return (
    <>
      <div className="restaurantsBody">
        <div className="contentContainer">
          <div className="headerContainer">
            <div className="titleContainer">
              <h1 className="header">{currentRestaurant[0]?.name}</h1>
            </div>
          </div>

          {/* button navigation - restaurant list section */}
          <div className="buttonContainer">
            <div className="buttonTitleContainer">
              <button className="button" onClick={openNav}></button>
              <h2 className="buttonTitle">restaurant list</h2>
            </div>
          </div>

          {/* center restaurant content */}
          <div className="descriptionContainer">

            {/* address */}
            <div className="descriptionContents">
              <h3 className="descriptionHeader">address:</h3>
              {currentRestaurant[0]?.address}
            </div>

            {/* phone number */}
            <div className="descriptionContents">
              <h3 className="descriptionHeader">phone number:</h3>
              {currentRestaurant[0]?.phone}
            </div>

            {/* business hours */}
            <div className="descriptionContents">
              <h3 className="descriptionHeader">business hours:</h3>
              {currentRestaurant[0]?.hours}
            </div>
          </div>

          {/* footer restaurant content */}
          <div className="footContainer">

            {/* type of restaurant */}
            <div className="footerDescriptionContents">
              <h3 className="descriptionFooter">type:</h3>
              {currentRestaurant[0]?.cuisine}
            </div>

            {/* review info */}
            <div className="footerDescriptionContents">
              <h3 className="descriptionFooter">dave's review:</h3>
              {currentRestaurant[0]?.about}
            </div>
            
          </div>
        </div>

        {/*  map */}
        <div className="mapContainer">

          {latLong[0] && (
            <MapContainer className="map"
              center={latLong}
              zoom={16}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* marker */}
              <Marker key={currentRestaurant[0]?.name} position={latLong}>
                <Popup className="popUp">{currentRestaurant[0]?.name}</Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
        {/* footer for non-desktop */}
        <div className="mobileFooter">
          <h3>dave's restaurant blog</h3>
        </div>
      </div>
    </>
  );
}
