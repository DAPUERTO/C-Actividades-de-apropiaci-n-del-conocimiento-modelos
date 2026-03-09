import express from "express";
import pqrsRoutes from "./routes/pqrsRoutes.js";

const app = express();
app.use(express.json());

app.use("/pqrs", pqrsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
