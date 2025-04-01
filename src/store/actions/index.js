import api from "../../api/api"

export const fetchMedications = (queryString) => async (dispatch) => {
    try {
        dispatch({ type: "IS_FETCHING" });
        const { data } = await api.get(`/public/medications?${queryString}`);
        dispatch({
            type: "FETCH_MEDICATIONS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({ type: "IS_SUCCESS" });
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch medications",
         });
    }
};


export const addToTreatment = (data, qty = 1, toast) => 
    (dispatch, getState) => {
        // Find the medication
        const { medications } = getState().medications;
        const getMedication = medications.find(
            (item) => item.medicationId === data.medicationId
        );

        // Check for stocks
        const isQuantityExist = getMedication.quantity >= qty;

        // If in stock -> add
        if (isQuantityExist) {
            dispatch({ type: "ADD_TREATMENT", payload: {...data, quantity: qty}});
            toast.success(`${data?.medicationName} added to the treatment`);
            localStorage.setItem("treatmentMedications", JSON.stringify(getState().treatments.treatment));
        } else {
            // error
            toast.error("Out of stock");
        }
};

export const removeFromTreatment =  (data, toast) => (dispatch, getState) => {
    dispatch({type: "REMOVE_TREATMENT", payload: data });
    toast.success(`${data.medicationName} removed from treatment`);
    localStorage.setItem("treatmentMedications", JSON.stringify(getState().treatments.treatment));
}
