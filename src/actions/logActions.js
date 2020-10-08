import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';

//export const getLogs = () => {
//  return async (dispatch) => {
//allows us to dispatch to the reducer
//    setLoading();

//    const res = await fetch('/logs');
//   const data = await res.json();

//    dispatch({
//dispatch our object to reducer
//      type: GET_LOGS,
//      payload: data,
//    });
//  };
//};

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs'); //make a request
    const data = await res.json(); //get the data

    dispatch({
      //dispatch our object to reducer
      type: GET_LOGS,
      payload: data, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Add new Log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log), //the data we're sending
      headers: {
        'Content-Type': 'application/json',
      },
    }); //make a request
    const data = await res.json(); //get the data

    dispatch({
      //dispatch our object to reducer
      type: ADD_LOG,
      payload: data, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete log from server

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE',
    }); //make a request

    dispatch({
      //dispatch our object to reducer
      type: DELETE_LOG,
      payload: id, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Update log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    }); //make a request
    const data = await res.json();

    dispatch({
      //dispatch our object to reducer
      type: UPDATE_LOG,
      payload: data, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Search server logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`); //make a request
    const data = await res.json(); //get the data

    dispatch({
      //dispatch our object to reducer
      type: SEARCH_LOGS,
      payload: data, //change the state
    });
  } catch (err) {
    //error handling
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set Current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear Current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
