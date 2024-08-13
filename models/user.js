const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  tel: { type: Number, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model("UserActivation_2", userSchema);