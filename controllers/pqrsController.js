import { findAll, findById, create, update, remove } from "../models/Pqrsmodels.js";

// GET /pqrs
export const getAllPQRS = (req, res) => {
  try {
    const data = findAll();
    res.status(200).json({
      message: "Lista de PQRS obtenida correctamente",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// GET /pqrs/:id
export const getPQRSById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = findById(id);
    if (!item) {
      return res.status(404).json({ message: "PQRS no encontrada" });
    }
    res.status(200).json({
      message: "PQRS obtenida correctamente",
      data: item,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// POST /pqrs
export const createPQRS = (req, res) => {
  try {
    const { tipo, descripcion, usuario } = req.body;
    if (!tipo || !descripcion || !usuario) {
      return res.status(400).json({ message: "Datos incompletos" });
    }
    const nueva = create({ tipo, descripcion, usuario });
    res.status(201).json({
      message: "PQRS creada correctamente",
      data: nueva,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// PUT /pqrs/:id
export const updatePQRS = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { tipo, descripcion, usuario } = req.body;
    const actualizada = update(id, { tipo, descripcion, usuario });
    if (!actualizada) {
      return res.status(404).json({ message: "PQRS no encontrada" });
    }
    res.status(200).json({
      message: "PQRS actualizada correctamente",
      data: actualizada,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};

// DELETE /pqrs/:id
export const deletePQRS = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const eliminado = remove(id);
    if (!eliminado) {
      return res.status(404).json({ message: "PQRS no encontrada" });
    }
    res.status(200).json({ message: "PQRS eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor" });
  }
};
