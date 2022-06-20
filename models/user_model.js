import mongoose from "mongoose";

// Schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: { type: Date, required: true },
});

// Each key in our code userSchema defines a property in our documents which will be cast to its associated SchemaType.
// For example, we've defined a property userName which will be cast to the String SchemaType.

// Reference model to talk/work with MongoDB
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
