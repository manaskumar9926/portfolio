import mongoose, { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

export default models.Contact || model("Contact", ContactSchema);
