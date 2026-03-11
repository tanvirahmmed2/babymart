import mongoose from "mongoose";
import { MONGO_URL } from "./secret";

let cached = global.mongoose || { conn: null, promise: null };

const ConnectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 30000, // Wait up to 30 seconds
      socketTimeoutMS: 45000,         // Close sockets after 45 seconds
      family: 4                       // Force IPv4
    };

    cached.promise = mongoose.connect(MONGO_URL, opts).then((m) => {
      console.log('MongoDB connected successfully');
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null; // Clear the failed promise
    console.error('Connection Timeout Error:', error.message);
    throw error;
  }
  return cached.conn;
};

export default ConnectDB;