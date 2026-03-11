
const getAll = () => {
  try {
    const data = [
      {
        id: 1,
        name: "John Becerra",
        email: "jfbecerra@sena.edu.co"
      },
      {
        id: 2,
        name: "Marlon Moreno",
        email: "marlo@sena.edu.co"
      }
    ];
    return data;
  } catch (error) {
    return [];
  }
}

const getById = (id) => {
  try {
    const user = {
      id: id,
      name: "John Becerra",
      email: "jfbecerra@sena.edu.co"
    }
    return user;
  } catch (error) {
    return []
  }
}

const create = (name, email, phone) => {
  try {
    const user = { name, email, phone }
    return user;
  } catch (error) {
    return []
  }
}

const update = (id, name, email, phone) => {
  try {
    const user = {
      id, name, email, phone
    }
    return user;
  } catch (error) {
    return []
  }
}

const destroy = (id) => {
  try {
    return true;
  } catch (error) {
    return [];
  }
}

export {
  getAll,
  getById,
  create,
  update,
  destroy
}