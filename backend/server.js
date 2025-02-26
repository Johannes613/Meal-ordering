import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
const app = express();
const PORT = 3500;

// middlewares
connectDB();
app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use("/images", express.static("uploads"));
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);

// routes
app.get("/", (req, res) => {
  res.send("Server is Working");
});

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log("Connected to DB");
    console.log("Server Running on 3500");
  });
});
