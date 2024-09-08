import { createSlice } from "@reduxjs/toolkit";

//add patient
const deletePatientSlice = createSlice({
    name: "deletePatientSlice",
    initialState:{
        deletePatient: null,
        deletePatientLoading: false,
        deletePatientError:null
        
    },
    reducers:{
        setDeletePatient:(state,action)=>{
            state.deletePatient = action.payload;

        },
        setDeletePatientLoading:(state,action)=>{
            state.deletePatientLoading = action.payload;

        },
        setDeletePatientError:(state,action)=>{
            state.deletePatientError = action.payload;

        }
    }

})





export const { setDeletePatient, setDeletePatientLoading, setDeletePatientError } = deletePatientSlice.actions;
export default deletePatientSlice.reducer;
