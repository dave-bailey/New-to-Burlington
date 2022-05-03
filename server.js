const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

// const restaurants = require("./api/restaurants.json");

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];

app.use(cors());

//handles a content-type header for the server to use if it is json
app.use(express.json());

//allows us to understand urlenconded payload
app.use(express.urlencoded({ extended: true }));


const restaurantSchema = require("./data.js");

const Restaurant = mongoose.model("Restaurant", restaurantSchema);


app.get("/", async (request, response) => {

  let restaurants = await Restaurant.find({});

  return response.json(restaurants);
})

// // Accessing the path module
// const path = require("path");

// // Step 1:
// app.use(express.static(path.resolve(__dirname, "./client/build")));
// // Step 2:
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.listen(port, () => {
  console.log(`You're listening on ${port}`);
});
