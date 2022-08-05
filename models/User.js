const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unqiue: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});


const User = new mongoose.model("User", userSchema)


module.exports = User;