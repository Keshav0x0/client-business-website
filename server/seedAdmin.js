import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({
      email: "admin@kventerprises.com",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await User.create({
      name: "Administrator",
      email: "admin@kventerprises.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("🎉 Admin created successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();