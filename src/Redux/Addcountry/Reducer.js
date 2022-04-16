import { ADD_COUNTRY_LOADING, ADD_COUNTRY_SUCCESS , ADD_COUNTRY_FAILURE} from "./action";

const initialstore = {
    loading: false,
    error: false,
    data: []
};

export const addcountryReducer = (store = initialstore, {type, payload}) => {
    switch (type) {
        case ADD_COUNTRY_LOADING:
            return {
                ...store,
                loading: true,
                error: false
            };
        case ADD_COUNTRY_SUCCESS:
            return {
                ...store,
                loading: false,
                error: false,
                data: [...payload]
            };
        case ADD_COUNTRY_FAILURE:
            return {
                ...store,
                loading: false,
                error: true
            };
        default:
            return store;
    }
}
   