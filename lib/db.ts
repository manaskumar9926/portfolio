import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("❌ Please add MONGO_URI to your .env.local file");
}

// Maintain a cached connection
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("MongoDB connection failed");
  }
};
