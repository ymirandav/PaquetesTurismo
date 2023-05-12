const mongoose = require("mongoose");

const PaquetesSchema = new mongoose.Schema({
    paq_nombre: {
        type: String,
        required: true,
    },
    paq_descripcion:  {
        type: String,
        required: true,
    },
    paq_precio: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value > 0;
            }
        }
    },
    paq_incluye: {
        type: String,
        required: true,
    },
    paq_no_incluye: {
        type: String,
        required: true,
    },
    paq_restricciones: {
        type: String,
        required: true,
    },
    paq_observaciones: {
        type: String,
        required: true,
    },
    paq_fotos: {
        type: String,
        required: true,
    },
    paq_duracion: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value > 0;
            }
        }
    },
});

const Paquetes = mongoose.model("Paquetes", PaquetesSchema);

module.exports = { Paquetes };