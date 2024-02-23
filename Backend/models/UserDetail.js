import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  // Add other user details you want to store
  // For example: bio, dateOfBirth, etc.
});

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

export default UserDetail;
