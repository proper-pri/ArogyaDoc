const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to protect routes
const authMiddleware = async (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization');

  // If no token is provided, return a 401 response
  if (!token) {
    return res.status(401).json({ message: 'No token found, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user associated with the token
    console.log(decoded);
    const user = await User.findById(decoded.id);
    console.log(user);

    // If user is not found, return a 401 response
    if (!user) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    // Attach the user to the request object
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
