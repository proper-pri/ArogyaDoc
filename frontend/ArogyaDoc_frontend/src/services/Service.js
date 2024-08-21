import axios from 'axios';
import Cookies from 'js-cookie';

// Base URL of your API
const BASE_URL = 'http://localhost:5000/ArogyaDoc';

const populateHeader = ()=>{
    const token  = Cookies.get('authToken');
    return axios.create({
        headers:{
            'Authorization' :`${token}`
        }
    })

}

// Login service function
export const login = async (body) => {
  try {
    // Sending a POST request to the login endpoint
    const response = await axios.post(`${BASE_URL}/login`, body);

    // Return the response data or handle it as needed
    return response.data;
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to be handled by the calling function
  }
};

