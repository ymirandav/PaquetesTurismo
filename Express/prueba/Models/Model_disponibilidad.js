const mongoose = require("mongoose");

const DisponibilidadSchema = new mongoose.Schema({
  paqueteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paquetes",
    required: true,
  },
  numeroPersonas: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value > 0;
      },
    },
  },
  fecha: {
    type: Date,
    required: true,
  },
  contadorPersonas: {
    type: Number,
    default: 0,
  },
});

DisponibilidadSchema.statics.verificarDisponibilidad = async function (paqueteId, numeroPersonas, fecha) {
  // Obtener la capacidad máxima del paquete
  const paquete = await mongoose.model("Paquetes").findById(paqueteId).select("paq_personas");

  // Obtener el número total de personas reservadas para la fecha especificada
  const disponibilidadExistente = await this.findOne({ paqueteId, fecha });

  const numeroPersonasReservadas = disponibilidadExistente ? disponibilidadExistente.numeroPersonas : 0;

  // Calcular el nuevo número de personas reservadas si se realiza la reserva actual
  const nuevoNumeroPersonasReservadas = numeroPersonasReservadas + numeroPersonas;

  if (nuevoNumeroPersonasReservadas <= paquete.paq_personas) {
    // Si el nuevo número de personas reservadas es menor o igual a la capacidad máxima del paquete, actualizar o crear la disponibilidad
    if (disponibilidadExistente) {
      disponibilidadExistente.numeroPersonas = nuevoNumeroPersonasReservadas;
      await disponibilidadExistente.save();
    } else {
      const nuevaDisponibilidad = new this({ paqueteId, numeroPersonas: nuevoNumeroPersonasReservadas, fecha });
      await nuevaDisponibilidad.save();
    }

    return { disponibilidad: true, contadorPersonas: nuevoNumeroPersonasReservadas };
  } else {
    // Si el nuevo número de personas reservadas supera la capacidad máxima del paquete, indicar que no se puede reservar
    return { disponibilidad: false, contadorPersonas: numeroPersonasReservadas };
  }
};

const Disponibilidad = mongoose.model("Disponibilidad", DisponibilidadSchema);

module.exports = { Disponibilidad };
