const express = require('express');
const router = express.Router();
const { getAllPatients, getPatientByContact, addPatient, deletePatient, updatePatient } = require('../controllers/patientController');
const multer = require('multer');

//user
const { registerDoctor, loginDoctor } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');


// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `uploads/${req.body.contactNumber}`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Patient Routes
router.get('/allPatient',authMiddleware, getAllPatients);
router.post('/deletePatient',authMiddleware,deletePatient);
router.get('/patient/:contactNumber',authMiddleware, getPatientByContact);
router.post('/add',authMiddleware,addPatient);
router.put('/update',authMiddleware,updatePatient);

//user Routes
router.post('/register',registerDoctor);
router.post('/login',loginDoctor);


module.exports = router;
