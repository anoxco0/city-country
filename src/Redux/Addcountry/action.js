export const ADD_COUNTRY_LOADING = 'ADD_COUNTRY';
export const ADD_COUNTRY_SUCCESS = 'ADD_COUNTRY_SUCCESS';
export const ADD_COUNTRY_FAILURE = 'ADD_COUNTRY_FAILURE';

export const addCountryLoading = () => {
    return {
        type: ADD_COUNTRY_LOADING,
    }
}

export const addCountrySuccess = (payload) => {
    return {
        type: ADD_COUNTRY_SUCCESS,
        payload
    }
}

export const addCountryFailure = () => {
    return {
        type: ADD_COUNTRY_FAILURE,
    }
}

