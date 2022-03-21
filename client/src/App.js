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
  //state for json data

  /*
  
  NOTES ON WEIRD BROKEN STUFF 

  1. When I refresh on a restaurant page it breaks. If you click through everything from the home page it is happy and the home page will refresh. If you write in hard values or use a variable that is set to data on this app page it works and refreshes, but it can't fetch data for a refresh of the map. The latt & long data comes back as undefined. If I comment out the map in the restaurant component the header and other div data will refresh and re-render. Not sure if this is a leaflet issue or an issue with my code. But it ain't happy with something.

  2. My state is doing a weird thing too. I currently have my initial value set to null as a string. Anything but a string with text in it will break my app: empty object, empty string, empty array, a number, a boolean.. you name it...it breaks it, but a string works. I have no idea why. 

  */

  const [restaurantList, setRestaurantList] = useState("null");

  //runs fetch and sets state
  useEffect(() => {
    let fetchData = async () => {
      const response = await fetch("http://localhost:8080", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const restaurants = await response.json();

      setRestaurantList(restaurants);
    };
    //calling fetch
    fetchData();
  }, []);

  return (
    <>
      {/*  Rendering Nav */}
      <NavComponent />

      {/*  Routes with restaurant rendering with props data */}

      <Routes>
        <Route path="/">
          {/*  Home Render */}
          <Route index element={<Home />} />

          {/* Restaurant  #1 */}
          <Route
            path="pingala"
            element={
              <Restaurants
                name={restaurantList[0]?.name}
                cuisine={restaurantList[0]?.cuisine}
                address={restaurantList[0]?.address}
                phone={restaurantList[0]?.phone}
                hours={restaurantList[0]?.hours}
                about={restaurantList[0]?.about}
                center={[
                  restaurantList[0]?.latitude,
                  restaurantList[0]?.longitude,
                ]}
              />
            }
          />

          {/* Restaurant  #2 */}
          <Route
            path="hen-of-the-wood"
            element={
              <Restaurants
                name={restaurantList[1].name}
                cuisine={restaurantList[1]?.cuisine}
                address={restaurantList[1]?.address}
                phone={restaurantList[1]?.phone}
                hours={restaurantList[1]?.hours}
                about={restaurantList[1]?.about}
                center={[
                  restaurantList[1]?.latitude,
                  restaurantList[1]?.longitude,
                ]}
              />
            }
          />

          {/* Restaurant  #3 */}
          <Route
            path="nomad-coffee"
            element={
              <Restaurants
                name={restaurantList[2]?.name}
                cuisine={restaurantList[2]?.cuisine}
                address={restaurantList[2]?.address}
                phone={restaurantList[2]?.phone}
                hours={restaurantList[2]?.hours}
                about={restaurantList[2]?.about}
                center={[
                  restaurantList[2]?.latitude,
                  restaurantList[2]?.longitude,
                ]}
              />
            }
          />

          {/* Restaurant  #4 */}
          <Route
            path="dobra-tea"
            element={
              <Restaurants
                name={restaurantList[3]?.name}
                cuisine={restaurantList[3]?.cuisine}
                address={restaurantList[3]?.address}
                phone={restaurantList[3]?.phone}
                hours={restaurantList[3]?.hours}
                about={restaurantList[3]?.about}
                center={[
                  restaurantList[3]?.latitude,
                  restaurantList[3]?.longitude,
                ]}
              />
            }
          />

          {/* Restaurant  #5 */}
          <Route
            path="farmhouse-tap-and-grill"
            element={
              <Restaurants
                name={restaurantList[4]?.name}
                cuisine={restaurantList[4]?.cuisine}
                address={restaurantList[4]?.address}
                phone={restaurantList[4]?.phone}
                hours={restaurantList[4]?.hours}
                about={restaurantList[4]?.about}
                center={[
                  restaurantList[4]?.latitude,
                  restaurantList[4]?.longitude,
                ]}
              />
            }
          />
        </Route>
      </Routes>

      {/*  Footer Render */}
      <FooterComponent />
    </>
  );
}

export default App;
