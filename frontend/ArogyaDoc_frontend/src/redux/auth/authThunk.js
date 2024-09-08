import { useNavigate } from 'react-router-dom';
import { getPatientData, login } from '../../services/Service';
import  { setCurrentUser, setIsLoading, setAuthError } from './userAuthSlice';




export function loginUser(body,navigate) {
   

    return async function thunk(dispatch) {
        try {
          
            dispatch(setIsLoading(true)); // Start loading
            const res = await login(body); // Call your API function
            if (res && res.token) {
                console.log(res.doctor);
            
                dispatch(setCurrentUser(res.doctor)); // Update state with user data
                navigate("/homepage");

                
    
              
            } 
            else {
                // Handle case where response is falsy
                console.log('Login failed or no token received');
            }
        } catch (error) {
            // Handle errors
            console.error("Login failed:", error);
            dispatch(setAuthError(error));


        } finally {
            dispatch(setIsLoading(false)); // Reset loading state
        }
    };
}






























