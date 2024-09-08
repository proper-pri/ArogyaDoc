import { createSlice } from "@reduxjs/toolkit";
//login user
const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        currentUser: null,
        isLoading: false,
        authError: null
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setAuthError: (state, action) => {
            state.authError = action.payload;
        }
    }
});



export const { setCurrentUser, setIsLoading, setAuthError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
