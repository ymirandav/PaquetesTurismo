const mongoose = require("mongoose");

const {Usuarios} = require("./Model_usuarios");

const TuristasSchema = new mongoose.Schema({
    tur_nombre: {
        type: String,
        required: true,
    },
    tur_apellido: {
        type: String,
        required: true,
    },
    tur_tipodoc: {
        type: String,
        required: true,
    },
    tur_nrodoc: {
        type: Number,
        required: true,
    },
    tur_telefono: {
        type: Number,
        required: true,
    },
    tur_dob: {
        type: Date,
        required: true,
    },
    tur_nacionalidad: {
        type: String,
        required: true,
    },
    tur_genero: {
        type: String,
        required: true,
    },
    Usuarios: {
        type: [Usuarios.schema],
        required: true,
    },
});

const Turistas = mongoose.model("Turistas", TuristasSchema);

module.exports = { Turistas };