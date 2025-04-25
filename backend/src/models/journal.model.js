import mongoose from "mongoose";
const journalSchema = new mongoose.Schema(
  {
    plantingDate: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    worry: { type: String, required: true, trim: true },
    root: { type: String, required: true, trim: true },
    prediction: { type: String, required: true, trim: true },
    reality: { type: String, required: true, trim: true },
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
