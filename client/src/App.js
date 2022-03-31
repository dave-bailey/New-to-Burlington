//Methods
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";

//Components
import Restaurants from "./components/Restaurants.jsx";
import Home from "./components/Home.jsx";
import NavComponent from "./components/NavComponent.jsx";

//CSS
import "./App.css";
import "./normalizer.css"

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    let isConnectedToServer = true;

    async function getData() {
      let response = await fetch(`http://localhost:8080/`);

      response = await response.json();

      setRestaurants(response);
    }
    if (isConnectedToServer) {
      getData();
    }

    // cleanup function to stop getData from running more than needed
    return () => {
      isConnectedToServer = false;
    };
  }, []);

  const navList = restaurants?.map((navLink, index) => {
    return (
      <li className="navLinks" key={`navLink-${index}`}>
        <Link to={navLink.id}>
          {navLink.name}
        </Link>
      </li>
    );
  });

  //mapping over state to create list of restaurant markers for each restaurant instance
  const markerList = restaurants?.map((restaurant, index) => {
    return (
      <li key={`restaurants-${index}`}>
        <Marker
          id={restaurant.id}
          position={[restaurant.latitude, restaurant.longitude]}
        >
          <Popup>
            <Link className="navLinks" to={restaurant.id}>
              {`${restaurant.name}!`}
            </Link>
          </Popup>
        </Marker>
      </li>
    );
  });

  return (
    <>
      <div className="appBody">
      {/*  Rendering Nav */}
      {/* <NavComponent navList={navList} /> */}
      <NavComponent
      navList={navList}
      />
      <Routes>
        <Route path="/">
          {/*  Home Render */}
          <Route index element={<Home markerList={markerList} />} />
          {/*  Restaurant Render off Params */}
          <Route
            path="/:id"
            element={<Restaurants navList={navList} restaurants={restaurants} />}
          />
        </Route>
      </Routes>
      {/*  Footer Render */}
      </div>
    </>
  );
}

export default App;
