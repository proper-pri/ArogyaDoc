const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type:String ,
    required: true,
    unique:true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email format'
    }
  },
  
}, { timestamps: true });



// Method to generate JWT
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
