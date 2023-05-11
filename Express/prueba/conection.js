const express = require("express");
const mongoose = require("mongoose");

const {Paquetes} = require("./Models/Model_paquetes");
const {Usuarios} = require("./Models/Model_usuarios");
const {Reservas} = require("./Models/Model_reservas");
const {Turista} = require("./Models/Model_turista");

const app = express();

app.use(express.json());

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/myDB"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();