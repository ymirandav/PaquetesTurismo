const mongoose = require("mongoose");

const ParticipanteSchema = new mongoose.Schema({
  participante_pasaporte: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length === 9;
      },
      message: "El pasaporte debe tener 9 caracteres.",
    },
  },
  participante_pais: {
    type: String,
    required: true,
  },
  participante_nombres: {
    type: String,
    required: true,
  },
  participante_fechaNacimiento: {
    type: Date,
    required: true,
  },
});

const Participante = mongoose.model("Participante", ParticipanteSchema);

module.exports = { Participante };
