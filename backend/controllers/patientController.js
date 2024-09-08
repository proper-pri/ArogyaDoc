const Patient = require("../models/patient");
const { ObjectId } = require("mongoose").Types;

// Get all patients by userid of doctor
exports.getAllPatients = async (req, res) => {
  try {
    console.log(req.user._id);
    const patients = await Patient.find({ userId: req.user._id });

    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// delete selected patient
exports.deletePatient = async (req, res) => {
  try {
    const idArr  = req.body;
    console.log(idArr);

    if (!Array.isArray(idArr) || idArr.length === 0) {
      return res
        .status(400)
        .json({ message: "ID array not provided or empty" });
    }

    const errors = [];

    await Promise.all(
      idArr.map(async (promiseId) => {
        try {
          const patient = await Patient.findById(promiseId);

          if (!patient) {
            errors.push(`Patient with ID ${promiseId} not found`);
            return;
          }

          if (req.user._id.toString() !== patient.userId.toString()) {
            errors.push(`Unauthorized to delete patient with ID ${promiseId}`);
            return;
          }

          await Patient.findByIdAndDelete(promiseId);
        } catch (err) {
          errors.push(
            `Error deleting patient with ID ${promiseId}: ${err.message}`
          );
        }
      })
    );

    if (errors.length > 0) {
      return res
        .status(400)
        .json({ message: "Some patients could not be removed", errors });
    }

    res.status(200).json({ message: "Patients removed successfully" });
  } catch (err) {
    console.log("Error deleting patients:", err);
    res
      .status(500)
      .json({ message: "Server error occurred while deleting patients" });
  }
};

// Get a single patient by contact number
exports.getPatientByContact = async (req, res) => {
  try {
    const { contactNumber } = req.params;

    if (!contactNumber) {
      return res.status(404).json({ message: "invalid contact number" });
    }

    const patient = await Patient.findOne({ contactNumber: contactNumber });

    if (!patient) {
      return res.status(404).json({ message: "patient not found" });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Add a new patient
exports.addPatient = async (req, res) => {
  try {
    const { name, contactNumber, address, notes, files } = req.body;
    if (!name || !contactNumber || !address || !notes || !files) {
      return res.status(404).json({ message: "few fields are empty" });
    }
    // console.log(req.user)

    const newBody = {
      userId: req.user._id,
      name,
      contactNumber,
      address,
      notes,
      files,
    };
    const patient = new Patient(newBody);
    await patient.save();
    res.status(201).json({ message: " patient save succesfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Add a new patient
exports.updatePatient = async (req, res) => {
  try {
    const { id, name, contactNumber, address, notes, files } = req.body;

    if (!id || !name || !contactNumber || !address || !notes || !files) {
      return res.status(404).json({ message: "few fields are empty" });
    }
    // console.log(req.user)
    
 const findPatient=await Patient.findOne({_id:id});
 if(findPatient.contactNumber===contactNumber){
  var updatedData = {
    name,
    address,
    notes,
    files,
  };
 }else{
  var updatedData = {
    name,
    contactNumber,
    address,
    notes,
    files,
  };
 }
   

    const updatedPatient = await Patient.findByIdAndUpdate(id, updatedData, {
      new: true
    });
    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      message: "Patient updated successfully",
      patient: updatedPatient,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Upload a file for a patient
// exports.uploadFile = async (req, res) => {
//   try {
//     const patient = await Patient.findById(req.params.id);

//     if (!patient) {
//       return res.status(404).json({ message: 'Patient not found' });
//     }

//     const file = {
//       fileName: req.file.originalname,
//       filePath: req.file.path,
//     };

//     patient.files.push(file);
//     await patient.save();
//     res.json(patient);
//   } catch (err) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };
