import express from "express";
import {
  loginAdmin,
  verifyAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", loginAdmin);

router.get("/verify", verifyAdmin);

export default router;