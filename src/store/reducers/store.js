import { configureStore } from "@reduxjs/toolkit";
import { medicationReducer } from "./MedicationReducer";
import { errorReducer } from "./ErrorReducer";
import { treatmentReducer } from "./TreatmentReducer";
import { authReducer } from "./AuthReducer";
// import { paymentMethodReducer } from "./paymentMethodReducer";

const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

const treatmentMedications = localStorage.getItem("treatmentMedications")
    ? JSON.parse(localStorage.getItem("treatmentMedications"))
    : [];

    const initialState = {
        auth: { user: user},
        treatments: { treatment: treatmentMedications },
    };

export const store = configureStore({
    reducer: {
        medications : medicationReducer,
        errors: errorReducer,
        treatments: treatmentReducer,
        auth: authReducer,
        // payment: paymentMethodReducer,
    },
    preloadedState: initialState ,
});

export default store;