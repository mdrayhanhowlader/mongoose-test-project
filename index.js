const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

const uri =
  "mongodb+srv://mongoosenewproject:g1fcHf6dXGfw7GFh@cluster0.pwszy9e.mongodb.net/carsdb";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cars = require("./routers/product.router");

app.use("/car", cars);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
