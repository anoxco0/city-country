import axios from "axios";
import { useDispatch } from "react-redux";
export const ADD_CITY_LOADING = 'ADD_CITY';
export const ADD_CITY_SUCCESS = 'ADD_CITY_SUCCESS';
export const ADD_CITY_FAILURE = 'ADD_CITY_FAILURE';

export const addCityloading = () => {
   
  return {
    type: ADD_CITY_LOADING,
  };
};

export const addCitySuccess = (payload) => {
  return {
    type: ADD_CITY_SUCCESS,
    payload
  };
};

export const addCityFailure = (error) => {  
    return {
        type: ADD_CITY_FAILURE,
        error
    };
    };
  export const Addnewcity = (payload) =>(dispatch)=> {
      dispatch(addCityloading());
      axios.post('/cities', payload).then(res => {
      dispatch(addCitySuccess(payload));
      }).catch(err => {
      dispatch(addCityFailure(err));
      });
  }
  export const getcity = (payload) =>(dispatch)=> {
      axios.get('/cities').then(res => {
          dispatch(addCitySuccess(payload));
        }).catch(err => {
      dispatch(addCityFailure());
    });
  }

