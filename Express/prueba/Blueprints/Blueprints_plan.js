const express = require("express");
const router = express.Router();

const { Plan } = require("../Models/Model_plan");

router.get("/plan", async (req, res) => {
  const allPlans = await Plan.find();
  return res.status(200).json(allPlans);
});

router.get("/plan/:id", async (req, res) => {
  const { id } = req.params;
  const plan = await Plan.findById(id);
  return res.status(200).json(plan);
});

router.get("/plan/paquete/:paqueteId", async (req, res) => {
  try {
    const { paqueteId } = req.params;
    const plansByPaquete = await Plan.find({ paqueteId: paqueteId });
    return res.status(200).json(plansByPaquete);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener los planes" });
  }
});

router.post("/plan", async (req, res) => {
  try {
    const newPlan = new Plan({ ...req.body });
    const insertedPlan = await newPlan.save();
    return res.status(201).json(insertedPlan);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: "Error al crear el plan" });
  }
});

router.put("/plan/:id", async (req, res) => {
  const { id } = req.params;
  await Plan.updateOne({ _id: id }, req.body);
  const updatedPlan = await Plan.findById(id);
  return res.status(200).json(updatedPlan);
});

router.delete("/plan/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlan = await Plan.findByIdAndDelete(id);
  return res.status(200).json(deletedPlan);
});

module.exports = router;
