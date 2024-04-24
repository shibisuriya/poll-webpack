import express from "express";

import {
  createPollController,
  getPollController,
} from "../controllers/createPollController.js";

//  ************** router object ***************
export const PollRoute = express.Router();

//  create user || POST
PollRoute.post("/set-poll", createPollController);

PollRoute.get("/get-poll/:id", getPollController);
