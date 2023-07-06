const express = require("express");

const { Participante } = require("../Models/Model_participante");

const app = express();

app.use(express.json());

app.get("/participante", async (req, res) => {
  const allParticipantes = await Participante.find();
  return res.status(200).json(allParticipantes);
});

app.get("/participante/:id", async (req, res) => {
  const { id } = req.params;
  const participante = await Participante.findById(id);
  return res.status(200).json(participante);
});

app.post("/participante", async (req, res) => {
  const newParticipante = new Participante({ ...req.body });
  const insertedParticipante = await newParticipante.save();
  return res.status(201).json(insertedParticipante);
});

app.put("/participante/:id", async (req, res) => {
  const { id } = req.params;
  await Participante.findByIdAndUpdate(id, req.body);
  const updatedParticipante = await Participante.findById(id);
  return res.status(200).json(updatedParticipante);
});

app.delete("/participante/:id", async (req, res) => {
  const { id } = req.params;
  const deletedParticipante = await Participante.findByIdAndDelete(id);
  return res.status(200).json(deletedParticipante);
});

module.exports = app;
