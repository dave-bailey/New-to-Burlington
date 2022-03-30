import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import "./Restaurants.css";

export default function Restaurants(props) {
  // Component renders map with restaurant pin and json data passed as props from App component

  let { id } = useParams();

  let restaurants = props.restaurants

  let currentRestaurant = restaurants.filter((restaurant) => { 
    return restaurant.id === id });

  let latLong = [currentRestaurant[0]?.latitude, currentRestaurant[0]?.longitude];

  return (
    <>
      <div id="restaurantsBody">
        {/* header - restaurant name from json */}
        <h1 id="restaurantHeader"> {currentRestaurant[0]?.name} </h1>

        {/*  map */}
        {latLong[0] && (
          <MapContainer
            center={latLong}
            zoom={13}
            style={{ height: "600px", width: "600px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* marker */}
            <Marker key={currentRestaurant[0]?.name} position={latLong}>
              <Popup>{currentRestaurant[0]?.name}</Popup>
            </Marker>
          </MapContainer>
        )}

        {/* restaurant data from json */}
        <div id="container">
          <div> {`Cuisine: ${currentRestaurant[0]?.cuisine} `} </div>
          <div> {`Address: ${currentRestaurant[0]?.address} `} </div>
          <div> {`Phone Number: ${currentRestaurant[0]?.phone} `} </div>
          <div> {`Business Hours: ${currentRestaurant[0]?.hours} `} </div>
          <div> {`About: ${currentRestaurant[0]?.about} `} </div>
        </div>
      </div>
    </>
  );
}
