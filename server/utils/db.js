import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
}
