const POLL_TYPES = ["singleSelect", "multiSelect"];

import { PollModel } from "../models/pollModel.js";

export const createPollController = async (req, res) => {
  try {
    let { question, pollType, answers } = req.body;

    if (!question) {
      return res.status(400).send({
        success: false,
        message: "There should be a question!",
      });
    }

    if (!pollType || !POLL_TYPES.includes(pollType)) {
      return res.status(400).send({
        success: false,
        message: "Poll types is wrong...",
      });
    }

    if (answers?.length <= 0) {
      return res.status(400).send({
        success: false,
        message: "There should be atleast one answer...",
      });
    }

    const user = await PollModel({
      question,
      pollType,
      answers,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Register callback",
      error,
    });
  }
};

export const getPollController = async (req, res) => {
  try {
    const { id } = req.params;
    const poll = await PollModel.findById(id);
    console.log("shibi shibi shibi -> ", poll);
    if (poll) {
      return res.status(404).send({
        succuss: true,
        data: poll,
      });
    } else {
      return res.status(404).send({
        succuss: false,
        message: "Poll not found!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Register callback",
      error,
    });
  }
};
