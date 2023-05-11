const express = require("express");

const { Reservas } = require("./Models/Model_reservas");

const app = express();

app.use(express.json());

app.get("/reservas", async (req, res) => {
    const allReservas = await Reservas.find();
    return res.status(200).json(allReservas);
    }
); 

app.get("/reservas/:id", async (req, res) => {
    const { id } = req.params;
    const reserva = await Reservas.findById(id);
    return res.status(200).json(reserva);
    }
);

app.post("/reservas", async (req, res) => {
    const newReserva = new Reservas({ ...req.body });
    const insertedReserva = await newReserva.save();
    return res.status(201).json(insertedReserva);
    }
);

app.put("/reservas/:id", async (req, res) => {
    const { id } = req.params;
    await Reservas.updateOne({ id }, req.body);
    const updatedReserva = await Reservas.findById(id);
    return res.status(200).json(updatedReserva);
    }
);

app.delete("/reservas/:id", async (req, res) => {
    const { id } = req.params;
    const deletedReserva = await Reservas.findByIdAndDelete(id);
    return res.status(200).json(deletedReserva);
    }
);

module.exports = app;