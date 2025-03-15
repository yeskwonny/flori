import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./src/lib/db.js";
import cookieParser from "cookie-parser";
// adding routes
import authRoutes from "./src/routes/auth.route.js";
import journalRoutes from "./src/routes/journal.route.js";
import userRoutes from "./src/routes/users.route.js";

const app = express();
const PORT = process.env.PORT;
//middleware
app.use(express.json());
// token from header
app.use(cookieParser());
//endpoints
app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server is on PORT ${PORT}`);
  connectDB();
});
