import { Router } from "express";
import {
  getAllPQRS,
  getPQRSById,
  createPQRS,
  updatePQRS,
  deletePQRS,
} from "../controllers/pqrsController.js";

const router = Router();

router.get("/", getAllPQRS);       // 200
router.get("/:id", getPQRSById);   // 200
router.post("/", createPQRS);      // 201
router.put("/:id", updatePQRS);    // 200
router.delete("/:id", deletePQRS); // 200

export default router;
