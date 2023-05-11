const express = require("express");

const { Turista } = require("./Models/Model_turista");

const app = express();

app.use(express.json());

app.get("/turista", async (req, res) => {
    const allTurista = await Turista.find();
    return res.status(200).json(allTurista);
    }
);

app.get("/turista/:id", async (req, res) => {
    const { id } = req.params;
    const turista = await Turista.findById(id);
    return res.status(200).json(turista);
    }
);

app.post("/turista", async (req, res) => {
    const newTurista = new Turista({ ...req.body });
    const insertedTurista = await newTurista.save();
    return res.status(201).json(insertedTurista);
    }
);

app.put("/turista/:id", async (req, res) => {
    const { id } = req.params;
    await Turista.updateOne({ id }, req.body);
    const updatedTurista = await Turista.findById(id);
    return res.status(200).json(updatedTurista);
    }
);

app.delete("/turista/:id", async (req, res) => {
    const { id } = req.params;
    const deletedTurista = await Turista.findByIdAndDelete(id);
    return res.status(200).json(deletedTurista);
    }
);

module.exports = app;