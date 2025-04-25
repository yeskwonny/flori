import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// adding routes
import authRoutes from "./routes/auth.route.js";
import journalRoutes from "./routes/journal.route.js";
import userRoutes from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT;
//middleware
app.use(express.json());
// token from header
app.use(cookieParser());
//cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
); //endpoints
app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server is on PORT ${PORT}`);
  connectDB();
});
