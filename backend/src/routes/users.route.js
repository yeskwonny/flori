import express from "express";
import {
  updateUserInfo,
  getUserInfo,
} from "../controllers/user.controllers.js";
import protectRoute from "../../middleware/protectRoute.js";
const router = express.Router();
router.get("/", protectRoute, getUserInfo);
router.put("/update", protectRoute, updateUserInfo);

export default router;
