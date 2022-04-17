import axios from "axios";
import { useState } from "react";

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

export const AddNewCountry = (payload) =>(dispatch)=> {
    dispatch(addCountryLoading());
    axios.post(`http://localhost:8080/country`, {country:payload}).then(res => {
    dispatch(addCountrySuccess(payload));
    }).catch(err => {
    dispatch(addCountryFailure(err));
    })
}
export const getCountry = (payload) =>(dispatch)=> {
    axios.get('http://localhost:8080/country').then(res => {
        dispatch(addCountrySuccess(payload));
      }).catch(err => {
    dispatch(addCityFailure());
  });
}

