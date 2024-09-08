import { createSlice } from "@reduxjs/toolkit";

//add patient
const addPatientSlice = createSlice({
    name: "addPatientSlice",
    initialState:{
        addPatient: null,
        addPatientLoading: false,
        addPatientError:null
        
    },
    reducers:{
        setAddPatient:(state,action)=>{
            state.addPatient = action.payload;

        },
        setAddPatientLoading:(state,action)=>{
            state.addPatientLoading = action.payload;

        },
        setAddPatientError:(state,action)=>{
            state.addPatientError = action.payload;

        }
    }

})





export const { setAddPatient, setAddPatientLoading, setAddPatientError } = addPatientSlice.actions;
export default addPatientSlice.reducer;
