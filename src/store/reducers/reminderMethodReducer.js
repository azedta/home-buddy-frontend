const initialState = {
    reminderMethod: null,
};

export const reminderMethodReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_REMINDER_METHOD":
            return {
                ...state,
                reminderMethod: action.payload,
            };
        default:
            return state;
    }
};