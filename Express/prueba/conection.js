const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PaquetesBlueprint = require("./Blueprints/Blueprints_paquetes");
const UsuariosBlueprint = require("./Blueprints/Blueprints_usuarios");
const ReservasBlueprint = require("./Blueprints/Blueprints_reservas");
const TuristasBlueprint = require("./Blueprints/Blueprints_turista");

app.get("/paquetes", PaquetesBlueprint);
app.post("/paquetes", PaquetesBlueprint);
app.put("/paquetes/:id", PaquetesBlueprint);
app.delete("/paquetes/:id", PaquetesBlueprint);

app.get("/usuarios", UsuariosBlueprint);
app.post("/usuarios", UsuariosBlueprint);
app.put("/usuarios/:id", UsuariosBlueprint);
app.delete("/usuarios/:id", UsuariosBlueprint);

app.get("/turista", TuristasBlueprint);
app.post("/turista", TuristasBlueprint);
app.put("/turista/:id", TuristasBlueprint);
app.delete("/turista/:id", TuristasBlueprint);

app.get("/reservas", ReservasBlueprint);
app.post("/reservas", ReservasBlueprint);
app.put("/reservas/:id", ReservasBlueprint);
app.delete("/reservas/:id", ReservasBlueprint);

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

module.exports = app;

start();