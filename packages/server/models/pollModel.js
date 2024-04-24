import mongoose from "mongoose";
const { Schema } = mongoose;

const pollSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  pollType: {
    type: String,
    enum: ["singleSelect", "multiSelect"],
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
});

export const PollModel = mongoose.model("Poll", pollSchema);
