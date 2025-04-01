const initialState = {
    medications: null,
    pagination: {},
};

export const medicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MEDICATIONS":
            return {
                ...state,
                medications: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            };

        case "FETCH_MEDICATIONS":
            return {
                ...state,
                medications: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            };
    
        default:
            return state;
    }
};