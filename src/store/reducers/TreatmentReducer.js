const initialState = {
    treatment: [],
    totalMedications: 0,
    treatmentId: null,
}

export const treatmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TREATMENT":
            const medicationToAdd = action.payload;
            const existingMedication = state.treatment.find(
                (item) => item.medicationId === medicationToAdd.medicationId
            );

            if(existingMedication) {
                const updatedTreatment = state.treatment.map((item) => {
                    if (item.medicationId === medicationToAdd.medicationId) {
                        return medicationToAdd;
                    } else {
                        return item;
                    }
                });

                return {
                    ...state,
                    treatment: updatedTreatment,
                };
            } else {
                const newTreatment = [...state.treatment, medicationToAdd];
                return {
                    ...state,
                    treatment: newTreatment,
                };
            }
        case "REMOVE_TREATMENT":
            return {
                ...state,
                treatment: state.treatment.filter(
                    (item) => item.medicationId !== action.payload.medicationId
                ),
            };
        case "GET_USER_TREATMENT_MEDICATIONS":
            return {
                ...state,
                treatment: action.payload,
                totalPrice: action.totalPrice,
                treatmentId: action.treatmentId,
            };
        case "CLEAR_TREATMENT":
            return { treatment:[], totalPrice: 0, treatmentId: null};
        default:
            return state;
    }
    return state;
}