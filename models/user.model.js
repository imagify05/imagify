import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  token: {
    type: Number,
    required: true,
    default: 3,
  },
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
});

const userModel =
  mongoose.models.userModel || mongoose.model("userModel", userSchema);

export default userModel;
