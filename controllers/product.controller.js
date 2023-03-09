const { CarsData } = require("../models/product.model");

const getAllCars = async (req, res) => {
  try {
    // const data = req.body;
    console.log(req.body);
    const room = await CarsData.create(req.body);
    res.send(room);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllCars = getAllCars;
