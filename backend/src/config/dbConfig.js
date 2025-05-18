import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gbot3757:53NpvwH3UHHZHpv0@cluster0.aoawvfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Database connection failed");
    console.log(err);
  }
};
