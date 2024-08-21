const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // ref:"User"
  },
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  notes: {
    type: String,
  },
  files: {
    type: String,
  }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient ;

