const mongoose = require("mongoose");
const { Paquetes } = require("./Model_paquetes");

const ReservasSchema = new mongoose.Schema({
    res_fechaini: {
        type: Date,
        required: true,
    },
    res_fechafin: {
        type: Date,
        required: true,
    },
    res_precio: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value > 0;
            }
        }
    },
    res_pagado: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value > 0;
            }
        }
    },
    res_estado: {
        type: String,
        required: true,
    },
    Paquetes: {
        type: [Paquetes.schema],
        required: true,
    },
});

const Reservas = mongoose.model("Reservas", ReservasSchema);

module.exports = { Reservas };