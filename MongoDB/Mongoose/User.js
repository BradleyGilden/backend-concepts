const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    validate: {
      validator: v =>  v % 2 === 0,
      message: props => `${props.value} is not even`
    }
  },
  email: {
    type: String,
    required: true,
    lowercase: true,  // changed all input to lowercase
  },
  createdAt: {
    type: Date,
    default: () => Date.now(), // sets default date
  },
  bestfriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
});

// create model from schema
module.exports = mongoose.model("User", userSchema);
