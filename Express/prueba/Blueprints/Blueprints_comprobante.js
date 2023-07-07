const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const { Comprobante } = require("../Models/Model_comprobante");

const app = express();  

app.get("/comprobante", async (req, res) => {
    const allComprobante = await Comprobante.find();
    return res.status(200).json(allComprobante);
    }
);

app.post('/comprobante', (req, res) => {
  const { name, email, amount } = req.body;

  const comprobante = new Comprobante({
    name,
    email,
    amount,
  });

  comprobante.save()
    .then(savedComprobante => {
      console.log('Comprobante guardado correctamente:', savedComprobante);
      res.status(200).json({ message: 'Comprobante guardado correctamente' });
    })
    .catch(error => {
      console.error('Ocurrió un error al guardar el comprobante:', error);
      res.status(500).json({ error: 'Error al guardar el comprobante' });
    });
});

module.exports = app;