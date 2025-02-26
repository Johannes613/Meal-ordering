import express from "express";
const userRouter = express.Router();
import { signup } from "../controllers/signupController.js";
import { login } from "../controllers/loginController.js";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";
import verifyJwt from "../middleware/jwtVerify.js";

userRouter.post("/signup", signup);
userRouter.post("/login", login);

userRouter.put("/cart/add", verifyJwt, addToCart);
userRouter.put("/cart/remove", verifyJwt, removeFromCart);
userRouter.get("/cart/get", verifyJwt, getCart);

export default userRouter;
