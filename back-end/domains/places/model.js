import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  city: String,
  photos: [String],
  description: String,
  extras: String,
  perks: [String],
  price: Number,
  checkin: String,
  checkout: String,
  guests: Number,
});

export default mongoose.model("Place", placeSchema);
