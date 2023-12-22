require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

app.use(cors());

app.use(express.json());

app.set("view engine", "ejs");

const server = app.listen(8000, () => {
  console.log("Server listening on port 8000");
});

app.get("/", (req, res) => res.status(200).json("success"));
