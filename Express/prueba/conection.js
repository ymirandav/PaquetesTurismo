const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");

// const {Paquetes} = require("./models/model_paquetes");
// const {Usuarios} = require("./models/model_usuarios");
// const {Reservas} = require("./models/model_reservas");
// const {Turistas} = require("./models/model_turistas");

app.use(express.json());

const PaquetesBlueprint = require("./Blueprints/Blueprints_paquetes");
// const UsuariosBlueprint = require("./Blueprints/Blueprints_usuarios");
// const ReservasBlueprint = require("./Blueprints/Blueprints_reservas");
// const TuristasBlueprint = require("./Blueprints/Blueprints_turistas");

app.use("/paquetes", PaquetesBlueprint);
// app.use("/usuarios", UsuariosBlueprint);
// app.use("/reservas", ReservasBlueprint);
// app.use("/turistas", TuristasBlueprint);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/myDB"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();