const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Birthday: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
