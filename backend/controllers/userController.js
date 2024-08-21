const User = require('../models/user');
const JWT  = require('jsonwebtoken');

// Register the doctor
exports.registerDoctor = async (req, res) => {
  const { username, password ,email} = req.body;
  console.log(username,password);

  try {
    // Check if doctor already exists
    const existingDoctor = await User.findOne({ username }&& {email}); //for email duplicacy 
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor already exists' });
    }

    // Create a new doctor
    const newDoctor = new User({ username, password,email });
    await newDoctor.save();

    // Generate a JWT token
    const token  = JWT.sign({id: newDoctor._id}, process.env.JWT_SECRET);
    //localstorage react
    // const token = newDoctor.generateAuthToken();

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Login the doctor
exports.loginDoctor = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the doctor by username
    const doctor = await User.findOne({ username });

    if (!doctor) {
      return res.status(400).json({ message:`usernwame: ${username} not found` });
    }

    

    const isMatch = (password===doctor.password);
    if(!isMatch){
        return res.status(400).json({message:"invalid password"})
    }

    // Generate a JWT token
    const token = JWT.sign({id:doctor._id},process.env.JWT_SECRET);

    res.status(200).json({ token, doctor });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
