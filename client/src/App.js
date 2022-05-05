import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";

import Restaurants from "./Restaurants/Restaurants.jsx";
import Home from "./Home/Home.jsx";
import NavComponent from "./NavComponent/NavComponent.jsx";

import "./App.css";
import "./normalizer.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [navOpen, setNavOpen] = useState(false);

  //added location to use effect to deal with back-button navigation bug - resets nav state to false to close nav component
  let location = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  useEffect(() => {
    let isConnectedToServer = true;

    async function getData() {
      let response = await fetch(`https://new-to-burlington.herokuapp.com/`);

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

  //functions and variables for navigation
  let closeNav = () => {
    setNavOpen(false);
    navCompVariable = null;
  };

  let home = (
    <li onClick={closeNav}>
      <Link className="homeLink" to="/">
        <h2>home</h2>
      </Link>
    </li>
  );

  let closeX = (
    <div className="closeButton">
      <button className="button" onClick={closeNav}></button>
      <h2 className="buttonTitle">close</h2>
    </div>
  );

  //building nav list from restaurant data
  const navList = restaurants?.map((navLink, index) => {
    return (
      <li className="navLinks" onClick={closeNav} key={`navLink-${index}`}>
        <Link to={navLink.id}>{navLink.name}</Link>
      </li>
    );
  });

  let navCompVariable = (
    <div className="nav">
      <NavComponent closeX={closeX} home={home} navList={navList} />
    </div>
  );

  //creating map markers from restaurant data
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
        {/* rendering navigation or home/restaurant page */}
        {navOpen ? (
          navCompVariable
        ) : (
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <Home
                    markerList={markerList}
                    setNavOpen={setNavOpen}
                    navList={navList}
                  />
                }
              />
              <Route
                path="/:id"
                element={
                  <Restaurants
                    restaurants={restaurants}
                    setNavOpen={setNavOpen}
                  />
                }
              />
            </Route>
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
