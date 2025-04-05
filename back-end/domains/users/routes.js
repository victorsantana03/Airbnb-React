import express from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = express.Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get("/users", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/users", async (req, res) => {
  connectDb();

  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.json(newUserDoc);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/users/login", async (req, res) => {
  connectDb();

  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
      const { name, _id } = userDoc;

      passwordCorrect
        ? res.json({ name, email, _id })
        : res.status(400).json("senha inválida");
    } else {
      res.status(400).json("Usuário não encontrado");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
export default router;
