import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import { PollRoute } from "./routes/pollRoutes.js";

//  ************** env config ***************
dotenv.config();

//  ************** mongodb connection ***************
connectDB();

//  ************** Express Framework instance created  ***************
const app = express();

//  ************** middlewares ***************
app.use(cors());
app.use(json());
app.use(morgan("dev"));

//  ************** Route Handler ***************
app.use("/", PollRoute);

//  ************** Server Listening ***************
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${process.env.DEV_MODE} ${PORT}`);
});
