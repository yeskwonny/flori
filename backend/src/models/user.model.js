import mongoose from "mongoose";
// userSchema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    userName:{ type: String, required: true, unique: true}
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
