const initialState = {
    user: null,
    dose: [],
    clientSecret: null,
    selectedUserCheckoutDose: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, user: action.payload };
        case "USER_DOSE":
            return { ...state, dose: action.payload };
        case "SELECT_CHECKOUT_DOSE":
            return { ...state, selectedUserCheckoutDose: action.payload };
        case "REMOVE_CHECKOUT_DOSE":
            return { ...state, selectedUserCheckoutDose: null };
        case "CLIENT_SECRET":
            return { ...state, clientSecret: action.payload };
        case "REMOVE_CLIENT_SECRET_DOSE":
            return { ...state, clientSecret: null, selectedUserCheckoutDose: null };
        case "LOG_OUT":
            return {
                user: null,
                dose: null,
            };

        default:
            return state;
    }
};