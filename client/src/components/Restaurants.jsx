import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Link } from "react-router-dom";


import "./Restaurants.css"

export default function Restaurants(props) {

  

    return (
      <>
      <div id="restaurantsBody" >
        
        <h1 id="restaurantHeader"> {props.name} </h1>

        <MapContainer
        center={ props.center }
        zoom={13}
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker key={props.name} position={ props.center }>
          <Popup>
              {props.name}
          </Popup>
        </Marker>
       
      </MapContainer>


        <div id="container">
        <div> {`Cuisine: ${props.cuisine} `} </div>
        <div> {`Address: ${props.address} `} </div>
        <div> {`Phone Number: ${props.phone} `} </div>
        <div> {`Business Hours: ${props.hours} `} </div>
        <div> {`About: ${props.about} `} </div>
        </div>
        
      </div>
      </>
    );
  }