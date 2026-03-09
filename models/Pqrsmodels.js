let pqrs = [];
let currentId = 1;

export const findAll = () => {
  return pqrs;
};

export const findById = (id) => {
  return pqrs.find((item) => item.id === id);
};

export const create = (data) => {
  const nueva = { id: currentId++, ...data };
  pqrs.push(nueva);
  return nueva;
};

export const update = (id, data) => {
  const index = pqrs.findIndex((item) => item.id === id);
  if (index === -1) return null;
  pqrs[index] = { ...pqrs[index], ...data };
  return pqrs[index];
};

export const remove = (id) => {
  const index = pqrs.findIndex((item) => item.id === id);
  if (index === -1) return false;
  pqrs.splice(index, 1);
  return true;
};
