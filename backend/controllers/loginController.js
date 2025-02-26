import userModel from "../models/usermodel.js";
import bcrypt from "bcryptjs"; // Update this import to bcryptjs
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const login = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ success: false, message: "email and password are required" });

    const foundUser = await userModel.findOne({
      email: email,
    });
    console.log(foundUser);
    if (!foundUser)
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });

    const isCorrect = await bcrypt.compare(password, foundUser.password); // bcryptjs works the same way
    console.log(isCorrect);

    if (!isCorrect)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET);
    console.log(foundUser);
    return res.status(200).json({ success: true, token: token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export { login };
