import axios from 'axios';
import Cookies from 'js-cookie';

// Base URL of your API
const BASE_URL = 'http://localhost:5000/ArogyaDoc';



const getHeader = ()=>{
  const token  = Cookies.get('authToken');
  return {
      headers:{
          'Authorization' :`${token}`
      }
  }
}

// Login service function
export const login = async (body) => {
  try {
    // Sending a POST request to the login endpoint
    const response = await axios.post(`${BASE_URL}/login`, body);
    console.log(response);

     // Save the token in a cookie
     if(response)
     Cookies.set('authToken', response.data.token, { expires: 7 }); // Expires in 7 days
      // Handle successful login
      console.log('Token saved in cookie:', response.data.token);

    // Return the response data or handle it as needed
    return response.data;
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

//get Patient data
export const getPatientData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allPatient`, getHeader());
    return response.data;
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('data failed:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

//Add Patient data
export const addPatient = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/add`,userData, getHeader());
    return response.data;
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('data failed:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

//delete Patient data
export const deletePatient = async (idArr) => {
  try {
    console.log(idArr);
    const response = await axios.post(`${BASE_URL}/deletePatient`,idArr, getHeader());
    return response.data;
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('data failed:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to be handled by the calling function
  }
};




