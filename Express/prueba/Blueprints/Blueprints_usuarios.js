const express = require("express");

const { Usuarios } = require("../Models/Model_usuarios");

const app = express();

app.use(express.json());

app.get("/usuarios", async (req, res) => {
    const allUsuarios = await Usuarios.find();
    return res.status(200).json(allUsuarios);
    }
);

app.get("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuarios.findById(id);
    return res.status(200).json(usuario);
    }
);

app.post("/usuarios", async (req, res) => {
    const newUsuario = new Usuarios({ ...req.body });
    const insertedUsuario = await newUsuario.save();
    return res.status(201).json(insertedUsuario);
    }
);

app.put("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    await Usuarios.updateOne({ id }, req.body);
    const updatedUsuario = await Usuarios.findById(id);
    return res.status(200).json(updatedUsuario);
    }
);

app.delete("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUsuario = await Usuarios.findByIdAndDelete(id);
    return res.status(200).json(deletedUsuario);
    }
);

module.exports = app;
