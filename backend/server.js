const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require("cors");
const router = require('./routes/patientRoutes');


// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();
//cors
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

//use routes
app.use('/ArogyaDoc',router);

// Routes
// app.use('/api/patients', require('./routes/patientRoutes'));
app.get("/",(req,res)=>{
    res.send({status:"active"}); 
    res.end();
})



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
