import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB Connected- DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Failed: ", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
};
