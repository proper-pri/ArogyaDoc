const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  // Extract MONGO_URI from environment variables
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1);
  }

  // Log the MongoDB URI to ensure it's loaded correctly (optional)
  console.log("MongoDB URI:", MONGO_URI);

  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
