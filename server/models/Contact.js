import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    companyName: String,
    heading: String,
    description: String,
    phone: String,
    email: String,
    address: String,
    workingDays: String,
    workingHours: String,
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);