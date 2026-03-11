import { getAll, getById, create, update, destroy } from "../models/user.model.js";

const getUsers = (req, res) => {
  const users = getAll();
  res
    .status(200)
    .json({
      msn: "lista de usuario",
      data: users
    })
}

const getuserById = (req, res) => {
  const { id } = req.params;
  const user = getById(id);
  res
    .status(201)
    .json({
      msn: `Usario con id: ${id} consultado correctamente`,
      data: user
    });
}

const createUser = (req, res) => {
  const { name, email, phone } = req.body;
  const user = create(name, email, phone);
  res
    .status(201)
    .json({
      msn: "Usario creado correctamente",
      data: user
    });
}

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const user = update(id, name, email, phone);
  res
    .status(200)
    .json({
      msn: `Usuario con id: ${id} modificado correctamente`,
      data: user
    })
}

const deleteUser = (req, res) => {
  const { id } = req.params;
  if (destroy(id)) {
    res
      .status(200)
      .json({
        msn: `Usuario con id: ${id} eliminado correctamente`,
        data: [{
          id: id
        }]
      })
  }
}

export {
  getUsers,
  getuserById,
  createUser,
  updateUser,
  deleteUser
}