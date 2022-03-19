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

let placeHolder = [44.4884, -73.1852];
// let latLongArray = [];
let latLong = [];

function App() {
  const [restaurantList, setRestaurantList] = useState("null");

  useEffect(() => {
    let fetchData = async () => {
      const response = await fetch("http://localhost:8080", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const restaurants = await response.json();

      // console.log(restaurants);

      setRestaurantList(restaurants);
    };
    fetchData();
  }, []);

  //This is not elegant, but I kept running into undefined and NaN fetch problems when trying to push variables on an array/for-loop them, but this works, so here we are

  //Pingala
  let pingLatitude = restaurantList[0]?.latitude;
  let pingLongitude = restaurantList[0]?.longitude;

  let pingalaArray = [pingLatitude, pingLongitude];

  //Hen of the Wood
  let henlatitude = restaurantList[1]?.latitude;
  let henlongitude = restaurantList[1]?.longitude;

  let henArray = [henlatitude, henlongitude];

  //Nomad Coffee
  let nomadlatitude = restaurantList[2]?.latitude;
  let nomadlongitude = restaurantList[2]?.longitude;

  let nomadArray = [nomadlatitude, nomadlongitude];

  //Dobra Tea
  let dobralatitude = restaurantList[3]?.latitude;
  let dobralongitude = restaurantList[3]?.longitude;

  let dobraArray = [dobralatitude, dobralongitude];

  //Farmm House
  let farmlatitude = restaurantList[4]?.latitude;
  let farmlongitude = restaurantList[4]?.longitude;

  let farmArray = [farmlatitude, farmlongitude];

  // useEffect( () => {
  //   console?.log(restaurantList);

  //   let latitude = restaurantList[0]?.latitude;
  //   let longitude = restaurantList[0]?.longitude;

  //   latLong = [ +latitude, +longitude ]

  //   console?.log(latLong);
  // }, [restaurantList])

  //   function setLatLong () {

  // }

  // let latitude = restaurantList[0]?.latitude;
  // let longitude = restaurantList[0]?.longitude;

  // console?.log(latitude, longitude);

  // latLong?.push(latitude);
  // latLong?.push(longitude);

  // console?.log(latLong);

  //    for(let i = 0; i < restaurantList.length; i++) {

  //     console.log(i);

  //     let latitude = restaurantList[i].latitude;
  //     let longitude = restaurantList[i].longitude;

  //     latitude = +latitude;
  //     longitude = +longitude;

  //     latLong.push(latitude);
  //     latLong.push(longitude);

  //     console.log(latLong);

  //     latLongArray.push(latLong)
  //   ;

  // }

  // console.log(latLongArray);

  // let latitude = restaurantList[0].latitude;
  // let longitude = restaurantList[0].longitude;

  // latLong = [ latitude, longitude ]

  return (
    <>
      <NavComponent />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
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
                center={pingalaArray}
                // latitude={ latitude }
                // longitude={ longitude }
              />
            }
          />
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
                center={henArray}
              />
            }
          />
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
                center={nomadArray}
              />
            }
          />
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
                center={dobraArray}
              />
            }
          />
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
                center={farmArray}
              />
            }
          />
        </Route>
      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
