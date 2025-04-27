import express from "express";
import "dotenv/config";
import cors from "cors";
import UserRoutes from "./domains/users/routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const { PORT } = process.env;

app.use("/", UserRoutes);

app.listen(PORT, () => {
  console.log(`App na porta ${PORT}`);
});
