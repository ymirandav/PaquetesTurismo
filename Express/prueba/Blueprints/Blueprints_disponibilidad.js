const express = require("express");
const router = express.Router();
const { Paquetes } = require("../Models/Model_paquetes");
const { Plan } = require("../Models/Model_plan");
const { Disponibilidad } = require("../Models/Model_disponibilidad");

router.post("/disponibilidad", async (req, res) => {
  try {
    const { paqueteId, numeroPersonas, fecha } = req.body;

    const paquete = await Paquetes.findById(paqueteId);

    if (!paquete) {
      return res.status(404).json({ message: "Paquete no encontrado" });
    }

    const disponibilidad = await Disponibilidad.verificarDisponibilidad(paqueteId, numeroPersonas, fecha);

    if (disponibilidad.disponibilidad) {
      return res.status(200).json({
        disponibilidad: true,
        message: "Reservado con éxito",
        fecha: fecha,
        contadorPersonas: disponibilidad.contadorPersonas,
      });
    } else {
      return res.status(200).json({ disponibilidad: false, message: "No se puede reservar" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.post("/consulta", async (req, res) => {
  try {
    const { paqueteId, numeroPersonas, fecha } = req.body;

    const paquete = await Paquetes.findById(paqueteId);

    if (!paquete) {
      return res.status(404).json({ message: "Paquete no encontrado" });
    }

    const disponibilidadExistente = await Disponibilidad.findOne({ paqueteId, fecha });

    let numeroPersonasReservadas = 0;
    if (disponibilidadExistente) {
      numeroPersonasReservadas = disponibilidadExistente.numeroPersonas;
      // console.log(disponibilidadExistente.numeroPersonas);
    }

    const capacidadMaxima = paquete.paq_personas;
    const capacidadDisponible = capacidadMaxima - numeroPersonasReservadas;

    if (numeroPersonas <= capacidadDisponible) {
      return res.status(200).json({ disponibilidad: true, fecha: fecha });
    } else {
      return res.status(200).json({ disponibilidad: false, fecha: fecha });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/listarNombresPaquetes", async (req, res) => {
  try {
    const paquetes = await Paquetes.find().select("paq_nombre");

    return res.status(200).json(paquetes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/listarDatosPaquetes", async (req, res) => {
  try {
    const paquetes = await Paquetes.find().select("paq_nombre paq_descripcion paq_precio paq_duracion paq_personas paq_incluye paq_no_incluye paq_observaciones");

    return res.status(200).json(paquetes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/listarDatosPlan", async (req, res) => {
  try {
    const planes = await Plan.find().select("plan_dia plan_titulo plan_descripcion plan_horaInicio");

    return res.status(200).json(planes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

router.get("/listarDatosPlan/:paqueteId", async (req, res) => {
  try {
    const { paqueteId } = req.params;
    const planes = await Plan.find({ paqueteId }).select("plan_dia plan_titulo plan_descripcion plan_horaInicio");

    return res.status(200).json(planes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
