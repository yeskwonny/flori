import { generateToken } from "../lib/utilis.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password, userName } = req.body;

  try {
    // checking empty input
    if (!fullName || !email || !password || !userName) {
      return res.status(400).json({ message: "fileds can not be empty" });
    }
    if (password.length < 6) {
      // sending message to client
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    // checking existing email & username
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const isUserNameExist = await User.findOne({ userName });
    if (isUserNameExist) {
      return res.status(400).json({ message: "Username already exists" });
    }
    console.log(isUserNameExist);
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user instance using model schema
    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
      userName: userName,
    });

    if (newUser) {
      // generate JWT token
      generateToken(newUser._id, res);
      // save in the db
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        userName: newUser.userName,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in sign up controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  // getting login credential
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    // checking password and if user is false
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    //generate token
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      userName: user.userName,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
  //send them to the server
  // res is okay, moves to the home
  // not show the error message
};

export const logout = (req, res) => {
  try {
    // clear jwt in the header
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
