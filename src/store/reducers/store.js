import { configureStore } from "@reduxjs/toolkit";
import { medicationReducer } from "./MedicationReducer";
import { errorReducer } from "./ErrorReducer";
import { treatmentReducer } from "./TreatmentReducer";
// import { authReducer } from "./authReducer";
// import { paymentMethodReducer } from "./paymentMethodReducer";

const treatmentMedications = localStorage.getItem("treatmentMedications")
    ? JSON.parse(localStorage.getItem("treatmentMedications"))
    : [];

    const initialState = {
        // auth: { user: user, selectUserCheckoutAddress },
        treatments: { treatment: treatmentMedications },
    };

export const store = configureStore({
    reducer: {
        medications : medicationReducer,
        errors: errorReducer,
        treatments: treatmentReducer,
        // auth: authReducer,
        // payment: paymentMethodReducer,
    },
    preloadedState: initialState ,
});

export default store;