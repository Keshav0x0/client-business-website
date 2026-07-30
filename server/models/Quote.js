import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    productType: String,
    size: String,
    gsm: String,
    quantity: Number,
    message: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;