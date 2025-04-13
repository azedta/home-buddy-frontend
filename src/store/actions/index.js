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

export const authenticateSignInUser 
    = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
        try {
            setLoader(true);
            const { data } = await api.post("/auth/signin", sendData);
            dispatch({ type: "LOGIN_USER", payload: data });
            localStorage.setItem("auth", JSON.stringify(data));
            reset();
            toast.success("Login Success");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Internal Server Error");
        } finally {
            setLoader(false);
        }
}


export const registerNewUser 
    = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
        try {
            setLoader(true);
            const { data } = await api.post("/auth/signup", sendData);
            reset();
            toast.success(data?.message || "User Registered Successfully");
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || error?.response?.data?.password || "Internal Server Error");
        } finally {
            setLoader(false);
        }
};


export const logOutUser = (navigate) => (dispatch) => {
    dispatch({ type:"LOG_OUT" });
    localStorage.removeItem("auth");
    navigate("/login");
};


export const addUpdateUserDose =
     (sendData, toast, doseId, setOpenDoseModal) => async (dispatch, getState) => {
    
    // const { user } = getState().auth;
    // await api.post(`/public/doses`, sendData, {
    //       headers: { Authorization: "Bearer " + user.jwtToken },
    //     });

    dispatch({ type:"BUTTON_LOADER" });
    toast.success("Dose saved successfully");
    try {
        if (!doseId) {
            const { data } = await api.post("/public/doses", sendData);
        } 
        else {
            await api.put(`/public/doses/${doseId}`, sendData);
        }
        dispatch(getUserDoses());
        
        dispatch({ type:"IS_SUCCESS" });
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Internal Server Error");
        dispatch({ type:"IS_ERROR", payload: null });
        //toast.success("Dose saved successfully");
    } finally {
        setOpenDoseModal(false);
    }
};


export const deleteUserDose = 
    (toast, doseId, setOpenDeleteModal) => async (dispatch, getState) => {
    try {
        dispatch({ type: "BUTTON_LOADER" });
        await api.delete(`/doses/${doseId}`);
        dispatch({ type: "IS_SUCCESS" });
        dispatch(getUserDoses());
        dispatch(clearCheckoutDoses());
        toast.success("Dose deleted successfully");
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Some Error Occured",
         });
    } finally {
        setOpenDeleteModal(false);
    }
};

export const clearCheckoutDose = () => {
    return {
        type: "REMOVE_CHECKOUT_DOSE",
    }
};


export const getUserDoses = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "IS_FETCHING" });
        const { data } = await api.get(`/public/doses`);
        dispatch({type: "USER_DOSE", payload: data});
        dispatch({ type: "IS_SUCCESS" });
    } catch (error) {
        console.log(error);
        toast.success("Dose deleted successfully");
        dispatch({ 
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch user doses",
         });
    }
};

export const selectUserCheckoutDose = (dose) => {
    localStorage.setItem("CHECKOUT_DOSE", JSON.stringify(dose));
    
    return {
        type: "SELECT_CHECKOUT_DOSE",
        payload: dose,
    }
};

export const addReminderMethod = (method) => {
    return {
        type: "ADD_REMINDER_METHOD",
        payload: method,
    }
};

export const createUserTreatment = (sendTreatmentItems) => async (dispatch, getState) => {
    try {
        dispatch({ type: "IS_FETCHING" });
        // await api.post('/treatment/create', sendTreatmentItems);
        await dispatch(getUserTreatment());
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to create treatment items",
         });
    }
};


export const getUserTreatment = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "IS_FETCHING" });
        // const { data } = await api.get('/treatments/users/treatment');
        
        dispatch({
            type: "GET_USER_TREATMENT_MEDICATIONS",
            payload: data.medications,
            totalMedications: data.totalMedications,
            treatmentId: data.treatmentId
        })
        localStorage.setItem("treatmentItems", JSON.stringify(getState().treatments.treatment));
        dispatch({ type: "IS_SUCCESS" });
    } catch (error) {
        // console.log(error);
        // dispatch({ 
        //     type: "IS_ERROR",
        //     payload: error?.response?.data?.message || "Failed to fetch treatment items",
        //  });
    }
};