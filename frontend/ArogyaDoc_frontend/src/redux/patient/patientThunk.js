import { addPatient, deletePatient, getPatientData } from '../../services/Service';
import { setAddPatient, setAddPatientError, setAddPatientLoading } from './addPatientSlice';
import { setDeletePatient, setDeletePatientError, setDeletePatientLoading } from './deletePatientSlice';
import { setCurrentPatientList, setCurrentPatientListError, setCurrentPatientListLoading } from './patientAuthSlice';

export function patientData() {
    return async function thunk(dispatch) {
        try {
            dispatch(setCurrentPatientListLoading(true)); // Start loading

            const res = await getPatientData(); // Call your API function
            if (res) {
                dispatch(setCurrentPatientList(res)); // Update state with patient data
            } else {
                // Handle case where response is falsy
                console.log('Failed to fetch patient data or no data received');
            }
        } catch (error) {
            // Handle errors
            console.error("Fetching patient data failed:", error);
            dispatch(setCurrentPatientListError(error));
        } finally {
            dispatch(setCurrentPatientListLoading(false)); // Reset loading state
        }
    };
}

export function addPatientData(userData) {
    return async function thunk(dispatch) {
        try {
            dispatch(setAddPatientLoading(true)); // Start loading

            const res = await addPatient(userData); // Call your API function
            if (res) {
                dispatch(setAddPatient(res)); // Update state with patient data
                dispatch(patientData());
            } else {
                // Handle case where response is falsy
                console.log('Failed to fetch patient data or no data received');
            }
        } catch (error) {
            // Handle errors
            console.error("Fetching patient data failed:", error);
            dispatch(setAddPatientError(error));
        } finally {
            dispatch(setAddPatientLoading(false)); // Reset loading state
        }
    };
}

export function deletePatientData(idArr) {
    return async function thunk(dispatch) {
        try {
            dispatch(setDeletePatientLoading(true)); // Start loading

            const res = await deletePatient(idArr); // Call your API function
            if (res) {
                dispatch(setDeletePatient(res)); // Update state with patient data
                dispatch(patientData());
            } else {
                // Handle case where response is falsy
                console.log('Failed to fetch patient data or no data received');
            }
        } catch (error) {
            // Handle errors
            console.error("Fetching patient data failed:", error);
            dispatch(setDeletePatientError(error));
        } finally {
            dispatch(setDeletePatientLoading(false)); // Reset loading state
        }
    };
}