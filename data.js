//----BOILER PLATE -- CONNECTING TO MONGO DATABASE ---//
require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind("connection error"));
//----------- END BOILER PLATE -------//

const restaurantSchema = new mongoose.Schema({
  id: String,
  name: String,
  cuisine: String,
  address:  String,
  latitude:  String,
  longitude:  String,
  phone:  String,
  hours: String,
  about:  String,
});

module.exports = restaurantSchema;
