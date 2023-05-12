const express = require("express");
const router = express.Router();

const { Reservas } = require("../Models/Model_reservas");

router.get("/reservas", async (req, res) => {
  const allReservas = await Reservas.find();
  return res.status(200).json(allReservas);
});

router.get("/reservas/:id", async (req, res) => {
  const { id } = req.params;
  const reserva = await Reservas.findById(id);
  return res.status(200).json(reserva);
});

router.post("/reservas", async (req, res) => {
  const newReserva = new Reservas({ ...req.body });
  const insertedReserva = await newReserva.save();
  return res.status(201).json(insertedReserva);
});

router.put("/reservas/:id", async (req, res) => {
  const { id } = req.params;
  await Reservas.updateOne({ _id: id }, req.body);
  const updatedReserva = await Reservas.findById(id);
  return res.status(200).json(updatedReserva);
});

router.delete("/reservas/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReserva = await Reservas.findByIdAndDelete(id);
  return res.status(200).json(deletedReserva);
});

module.exports = router;
