import express from "express";
import "dotenv/config";
import cors from "cors";
import UserRoutes from "./domains/users/routes.js";

const app = express();
app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.use("/", UserRoutes);

app.listen(PORT, () => {
  console.log(`App na porta ${PORT}`);
});
