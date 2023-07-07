const mongoose = require("mongoose");

const ComprobanteSchema = new mongoose.Schema({
    name: String,
    email: String,
    amount: Number,
});

const Comprobante = mongoose.model("Comprobante", ComprobanteSchema);

module.exports = { Comprobante };