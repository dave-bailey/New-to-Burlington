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

//sends restaurant json as response
app.get("/", (request, response) => {
  response.json(restaurants);
});

app.listen(port, () => {
  console.log(`You're listening on ${port}`);
});
