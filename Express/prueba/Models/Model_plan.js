const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  paqueteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paquetes",
    required: true,
  },
  plan_dia: {
    type: String,
    required: true,
  },
  plan_titulo: {
    type: String,
    required: true,
  },
  plan_descripcion: {
    type: [String], // Cambio: Utilizar un Array de Strings
    required: true,
  },
  plan_horaInicio: {
    type: String,
    required: true,
  },
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = { Plan };
