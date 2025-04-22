import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner", // References the Owner model
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Check if the model is already compiled, if not, compile it.
const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

export default Pet;
