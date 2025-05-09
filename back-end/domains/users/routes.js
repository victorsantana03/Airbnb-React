import express from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import "dotenv/config";
import { JWTVerify, JWTSign } from "../../utils/jwt.js";

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

router.get("/users/profile", async (req, res) => {
  const userInfo = await JWTVerify(req);
  res.json(userInfo);
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

    const { _id } = newUserDoc;
    const newUserObj = { name, email, _id };

    try {
      const token = await JWTSign(newUserObj);
      res.cookie("token", token).json(newUserObj);
    } catch (error) {
      res.status(500).json("Erro ao assinar com o JWT", error);
    }
  } catch (error) {
    res.status(500).json(error);
    throw error;
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

      if (passwordCorrect) {
        const newUserObj = { name, email, _id };
        try {
          const token = await JWTSign(newUserObj);
          res.cookie("token", token).json(newUserObj);
        } catch (error) {
          res.status(500).json("Erro ao assinar com o JWT", error);
        }
      } else {
        res.status(400).json("senha inválida");
      }
    } else {
      res.status(400).json("Usuário não encontrado");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/users/logout", (req, res) => {
  res.clearCookie("token").json("Deslogado com sucesso!");
});

export default router;
