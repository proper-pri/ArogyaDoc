const { body } = require('express-validator');

exports.validatePatient = [
  body('name').notEmpty().withMessage('Name is required'),
  body('contactNumber').notEmpty().withMessage('Contact Number is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('notes').notEmpty().withMessage('Notes are required'),
  body('files').notEmpty().withMessage('Files are required'),
];
