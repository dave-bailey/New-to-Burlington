import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "./Map.css";

function Map(props) {



  
  return (
    <div className="mapContainer">
      <MapContainer
        center={props.center}
        zoom={13}
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker id="pingala" position={[44.4884, -73.1852]}>
          <Popup>
            <Link className="navLinks" to="pingala">
              Pingala Cafe!
            </Link>
          </Popup>
        </Marker>

        <Marker id="henOfTheWood" position={[44.47912, -73.21765]}>
          <Popup>
            <Link className="navLinks" to="hen-of-the-wood">
              Hen of the Wood!
            </Link>
          </Popup>
        </Marker>

        <Marker id="nomad" position={[44.475883, -73.212074]}>
          <Popup>
            {" "}
            <Link className="navLinks" to="nomad-coffee">
              Nomad Cofee!
            </Link>
          </Popup>
        </Marker>

        <Marker id="dobra" position={[44.4768036, -73.2113523]}>
          <Popup>
            <Link className="navLinks" to="dobra-tea">
              Dobra Tea!
            </Link>
          </Popup>
        </Marker>

        <Marker id="farmHouse" position={[44.478344, -73.21319]}>
          <Popup>
            {" "}
            <Link className="navLinks" to="farmhouse-tap-and-grill">
              Farmhouse Tap and Grill!
            </Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
