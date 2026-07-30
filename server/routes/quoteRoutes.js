import express from "express";

import {
  createQuote,
  getQuotes,
  updateQuoteStatus,
  deleteQuote,
} from "../controllers/quoteController.js";

const router = express.Router();

router.post("/", createQuote);

router.get("/", getQuotes);

router.put("/:id", updateQuoteStatus);

router.delete("/:id", deleteQuote);

export default router;