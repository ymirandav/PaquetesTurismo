const mongoose = require("mongoose");

const UsuariosSchema = new mongoose.Schema({
    usu_email: {
        type: String,
        required: true,
    },
    usu_password: {
        type: String,
        required: true,
    },
});



const Usuarios = mongoose.model("Usuarios", UsuariosSchema);

module.exports = { Usuarios };