//Methods
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Restaurants from "./components/Restaurants.jsx";
import Home from "./components/Home.jsx";
import NavComponent from "./components/NavComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

//CSS
import "./App.css";

function App() {
  const [restaurantList, setRestaurantList] = useState("null");

  useEffect(() => {
    let fetchData = async () => {
      const response = await fetch("http://localhost:8080", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const restaurants = await response.json();

      setRestaurantList(restaurants);
    };
    fetchData();
  }, []);



  console.log(restaurantList[1].name);

  return (
    <>
      <NavComponent />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="pingala" element={<Restaurants />} />
          <Route path="hen-of-the-wood" element={<Restaurants />} />
          <Route path="nomad-coffee" element={<Restaurants />} />
          <Route path="dobra-tea" element={<Restaurants />} />
          <Route path="farmhouse-tap-and-grill" element={<Restaurants />} />
        </Route>
      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
