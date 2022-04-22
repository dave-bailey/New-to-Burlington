//Methods
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";

//Components
import Restaurants from "./components/Restaurants.jsx";
import Home from "./components/Home.jsx";
import NavComponent from "./components/NavComponent.jsx";

//CSS
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

  //function to toggle nav state to false, hide nav
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
    // <div onClick={closeNav}>
    //    <button className="button"></button>
    // </div>


            <div className="closeButton">
              <button className="button" onClick={closeNav}></button>
              <h2 className="buttonTitle">close</h2>
            </div>
  );


  const navList = restaurants?.map((navLink, index) => {
    return (
      <li className="navLinks" onClick={closeNav} key={`navLink-${index}`}>
        <Link to={navLink.id}>{navLink.name}</Link>
      </li>
    );
  });

  //toggling state to render nav component on click event
  let navCompVariable = null;

  if (navOpen) {
    return (navCompVariable = (
      <div className="nav">
        <NavComponent 
        closeX={closeX}
        home={home} 
        navList={navList} />
      </div>
    ));
  }

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

        {navCompVariable}

        <Routes>
          <Route path="/">
            {/*  Home Render */}
            <Route
              index
              element={<Home 
                markerList={markerList} 
                setNavOpen={setNavOpen} 
                navList={navList}
                />}
            />
            {/*  Restaurant Render off Params */}
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
        {/*  Footer Render */}
      </div>
    </>
  );
}

export default App;
