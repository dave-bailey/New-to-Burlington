const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];

app.use(cors());


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const restaurantSchema = require("./data.js");
const res = require("express/lib/response");

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

app.get("/", (rec, res) => {
  res.send("Hello World")
})

app.get("/", async (request, response) => {

  let restaurants = await Restaurant.find({});

  return response.json(restaurants);
})
 
app.listen(port, () => {
  console.log(`You're listening on ${port}`);
});
