import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

//GET techs from server

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs'); //make a request
    const data = await res.json(); //get the data

    dispatch({
      //dispatch our object to reducer
      type: GET_TECHS,
      payload: data, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// ADD technicians to server

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        //since we're sending data
        'Content-Type': 'application/json',
      },
    }); //make a request
    const data = await res.json(); //get the data

    dispatch({
      //dispatch our object to reducer
      type: ADD_TECH,
      payload: data, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete a tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    }); //make a request

    dispatch({
      //dispatch our object to reducer
      type: DELETE_TECH,
      payload: id, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//  SET loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
