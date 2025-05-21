import { Router } from "express";
import UserRoutes from "../domains/users/routes.js";
import PlaceRoutes from "../domains/places/routes.js";

const router = Router();

router.use("/", UserRoutes);
router.use("/", PlaceRoutes);

export default router;
