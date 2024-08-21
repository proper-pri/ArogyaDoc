import { login } from '../../services/Service';
import  { setCurrentUser, setIsLoading, setAuthError } from './userAuthSlice';



export function loginUser(body) {
    return async function thunk(dispatch) {
        try {
          
            dispatch(setIsLoading(true)); // Start loading
            const res = await login(body); // Call your API function

            if (res) {
                console.log(res); // Log the response
                dispatch(setCurrentUser(res)); // Update state with user data
            } else {
                // Handle case where response is falsy
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































