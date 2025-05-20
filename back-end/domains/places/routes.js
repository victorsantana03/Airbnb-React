import Place from "./model.js";
import express from "express";
import { JWTVerify } from "../../utils/jwt.js";
import { connectDb } from "../../config/db.js";
import { dowloadImage } from "../../utils/imageDowloader.js";

const router = express.Router();

router.post("/places", async (req, res) => {
  connectDb();
  const {
    title,
    city,
    photos,
    description,
    extras,
    perks,
    price,
    checkin,
    checkout,
    guests,
  } = req.body;

  try {
    const { _id } = await JWTVerify(req);

    const newPlaceDoc = await Place.create({
      owner: _id,
      title,
      city,
      photos,
      description,
      extras,
      perks,
      price,
      checkin,
      checkout,
      guests,
    });

    res.json(newPlaceDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json("Deu erro ao criar o novo lugar");
  }
});

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;

  await dowloadImage(link);
});

export default router;
