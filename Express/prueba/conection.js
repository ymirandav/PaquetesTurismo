const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({origin:"*"}));

app.use(express.json());

const PaquetesBlueprint = require("./Blueprints/Blueprints_paquetes");
const UsuariosBlueprint = require("./Blueprints/Blueprints_usuarios");
const ReservasBlueprint = require("./Blueprints/Blueprints_reservas");
const TuristasBlueprint = require("./Blueprints/Blueprints_turista");
const DisponibilidadBlueprint = require("./Blueprints/Blueprints_disponibilidad");
const PlanesBlueprint = require("./Blueprints/Blueprints_plan");
const ParticipanteBlueprint = require("./Blueprints/Blueprints_participante");
const ComprobanteBlueprint = require("./Blueprints/Blueprints_comprobante");

app.use(PaquetesBlueprint);
app.use(UsuariosBlueprint);
app.use(ReservasBlueprint);
app.use(TuristasBlueprint);
app.use(DisponibilidadBlueprint);
app.use(PlanesBlueprint);
app.use(ParticipanteBlueprint);
app.use(ComprobanteBlueprint);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/myDB"
    );
    app.listen(3000, '0.0.0.0', () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = app;

start();