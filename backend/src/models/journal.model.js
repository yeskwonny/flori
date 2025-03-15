import mongoose from "mongoose";
const journalSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["seed", "flower", "cactus"],
      default: "seed",
    },
    // flower position
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  { timestamps: true }
);

const Journal = mongoose.model("Journal", journalSchema);
export default Journal;
