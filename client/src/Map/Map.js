import React from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import "./Map.css";

function Map({markerList}) {

  return (
  <>
    <div className="mapContainer">
      {markerList.length && <MapContainer className="map"
        center={[44.4759, -73.2121]} //Burlington, VT 
        zoom={13}
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* list of restaurant markers */}
        <ul>
          {markerList}
        </ul>
      </MapContainer>}
    </div>
  </>
  );
}

export default Map;
