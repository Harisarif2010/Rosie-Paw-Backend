import mongoose, { Schema } from "mongoose";

const forgotPasswordSchema = new mongoose.Schema(
  {
    code: {
      type: Number,
      unique: true,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    expiredAt: {
      type: Date,
      default: () => new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ForgotPassword ||
  mongoose.model("ForgotPassword", forgotPasswordSchema);
