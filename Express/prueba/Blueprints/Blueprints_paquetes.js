const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const { Paquetes } = require("../Models/Model_paquetes");

const app = express();  

app.get("/paquetes", async (req, res) => {
  const allPaquetes = await Paquetes.find();
  return res.status(200).json(allPaquetes);
});

app.get("/paquetes/:id", async (req, res) => {
  const { id } = req.params;
  const paquete = await Paquetes.findById(id);
  return res.status(200).json(paquete);
});

app.post("/paquetes", async (req, res) => {
  const newPaquete = new Paquetes({ ...req.body });
  const insertedPaquete = await newPaquete.save();
  return res.status(201).json(insertedPaquete);
});

app.put("/paquetes/:id", async (req, res) => {
  const { id } = req.params;
  await Paquetes.updateOne({ _id: id }, req.body);
  const updatedPaquete = await Paquetes.findById(id);
  return res.status(200).json(updatedPaquete);
});

app.delete("/paquetes/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPaquete = await Paquetes.findByIdAndDelete(id);
  return res.status(200).json(deletedPaquete);
});

module.exports = app;
