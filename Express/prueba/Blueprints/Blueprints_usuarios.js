const express = require("express");
const router = express.Router();

const { Usuarios } = require("../Models/Model_usuarios");

router.get("/usuarios", async (req, res) => {
  const allUsuarios = await Usuarios.find();
  return res.status(200).json(allUsuarios);
});

router.get("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuarios.findById(id);
  return res.status(200).json(usuario);
});

router.post("/usuarios", async (req, res) => {
  const newUsuario = new Usuarios({ ...req.body });
  const insertedUsuario = await newUsuario.save();
  return res.status(201).json(insertedUsuario);
});

router.put("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  await Usuarios.updateOne({ _id: id }, req.body);
  const updatedUsuario = await Usuarios.findById(id);
  return res.status(200).json(updatedUsuario);
});

router.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUsuario = await Usuarios.findByIdAndDelete(id);
  return res.status(200).json(deletedUsuario);
});

module.exports = router;
