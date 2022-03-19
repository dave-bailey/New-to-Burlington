import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Link } from "react-router-dom";


import "./Restaurants.css"

export default function Restaurants(props) {

  

    return (
      <>
      <div id="restaurantsBody" >
        
        <div> {props.name} </div>

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



        <div> {props.cuisine} </div>
        <div> {props.address} </div>
        <div> {props.phone} </div>
        <div> {props.hours} </div>
        <div> {props.about} </div>
        
      </div>
      </>
    );
  }