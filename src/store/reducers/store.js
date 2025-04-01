import { configureStore } from "@reduxjs/toolkit";
import { medicationReducer } from "./MedicationReducer";
import { errorReducer } from "./ErrorReducer";
// import { cartReducer } from "./cartReducer";
// import { authReducer } from "./authReducer";
// import { paymentMethodReducer } from "./paymentMethodReducer";

export const store = configureStore({
    reducer: {
        medications : medicationReducer,
        errors: errorReducer
        // carts: cartReducer,
        // auth: authReducer,
        // payment: paymentMethodReducer,
    },
    preloadedState: {} ,
});

export default store;