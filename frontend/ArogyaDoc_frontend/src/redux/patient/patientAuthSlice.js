import { createSlice } from "@reduxjs/toolkit";
//login user
const patientAuthSlice = createSlice({
    name: "patientSlice",
    initialState:{
        currentPatientList: null,
        currentPatientListLoading: false,
        currentPatientListError:null
        
    },
    reducers:{
        setCurrentPatientList:(state,action)=>{
            state.currentPatientList = action.payload;

        },
        setCurrentPatientListLoading:(state,action)=>{
            state.currentPatientListLoading = action.payload;

        },
        setCurrentPatientListError:(state,action)=>{
            state.currentPatientListError = action.payload;

        }
    }

})





export const { setCurrentPatientList, setCurrentPatientListLoading, setCurrentPatientListError } = patientAuthSlice.actions;
export default patientAuthSlice.reducer;
