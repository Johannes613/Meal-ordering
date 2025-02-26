import express from "express";
import upload from "../middleware/uploadMiddleWare.js";
import {
  listFood,
  addFood,
  removeFood,
} from "../controllers/foodController.js";
const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
