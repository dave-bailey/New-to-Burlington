const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const restaurants = require("./api/restaurants.json");

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];

app.use(cors());

//handles a content-type header for the server to use if it is json
app.use(express.json());

//allows us to understand urlenconded payload
app.use(express.urlencoded({ extended: true }));


app.get("/", (request, response) => {

  return response.json(restaurants);
})

//sends restaurant json as response
app.get("/:id", (request, response) => {

  let paramsId = request.params['id'];

let restaurantData = restaurants.filter((restaurants) => { 
  return restaurants.id === paramsId });

  response.json(restaurantData);
});

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`You're listening on ${port}`);
});
