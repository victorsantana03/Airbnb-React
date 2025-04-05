import "dotenv/config";
import mongoose from "mongoose";

const { CONNECTION } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(CONNECTION);
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log("Não conectou ao banco ):", error);
  }
};
