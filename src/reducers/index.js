//this is gonna be out rootReducer
import { combineReducers } from 'redux'; //this gonna allow us to combine all the other reducers in this rootReducer
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  //takes in object the other reducers
  log: logReducer, //log : our state for the log part of the application
  tech: techReducer,
});
