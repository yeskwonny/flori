import jwt from "jsonwebtoken";
import User from "../src/models/user.model.js";

const protectRoute = async (req, res, next) => {
  console.log("🛡 protectRoute ");
  try {
    // getting token from header
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorised No valid token" });
    }
    // decode userid in the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorised No valid token" });
    }

    //getting userinfo without password
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // adding user info in the client's request
    req.user = user;

    // implement next function in controller
    next();
  } catch (error) {
    console.log("Error in proectRoute middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
