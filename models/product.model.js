const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const CarsData = mongoose.model("Cars", carSchema);

exports.CarsData = CarsData;
