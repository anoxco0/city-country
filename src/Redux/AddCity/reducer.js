import { ADD_CITY_LOADING,ADD_CITY_SUCCESS, ADD_CITY_FAILURE } from "./action";


const initialstore = {
    loading: false,
    cities: [],
    error: null
};


export const  addcityreducer= (store = initialstore, {type, payload}) => {
    switch (type) {
        case ADD_CITY_LOADING:
            return {
                ...store,
                loading: true,
                error: null
            };
        case ADD_CITY_SUCCESS:
            return {
                ...store,
                cities: [...payload],
                loading: false,
                error: null
            };
        case ADD_CITY_FAILURE:
            return {
                ...store,
                loading: false,
                error:payload
            };
        default:
            return store;
    }
}