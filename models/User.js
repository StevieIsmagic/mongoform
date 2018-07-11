const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  comments: String,
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('users', userSchema);