const express = require("express");
const router = express.Router();

const { Turistas } = require("../Models/Model_turistas");

router.get("/turistas", async (req, res) => {
  const allTuristas = await Turistas.find();
  return res.status(200).json(allTuristas);
});

router.get("/turistas/:id", async (req, res) => {
  const { id } = req.params;
  const turista = await Turistas.findById(id);
  return res.status(200).json(turista);
});

router.post("/turistas", async (req, res) => {
  const newTurista = new Turistas({ ...req.body });
  const insertedTurista = await newTurista.save();
  return res.status(201).json(insertedTurista);
});

router.put("/turistas/:id", async (req, res) => {
  const { id } = req.params;
  await Turistas.updateOne({ _id: id }, req.body);
  const updatedTurista = await Turistas.findById(id);
  return res.status(200).json(updatedTurista);
});

router.delete("/turistas/:id", async (req, res) => {
  const { id } = req.params;
  const deletedTurista = await Turistas.findByIdAndDelete(id);
  return res.status(200).json(deletedTurista);
});

module.exports = router;
