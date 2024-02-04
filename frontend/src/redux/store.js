import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from "redux-thunk";
import {composeWithDevTools} from '@redux-devtools/extension';
import { loadJobReducer } from './reducers/jobReducer';
import { loadJobTypeReducer } from './reducers/jobTypeReducers';


// combine reducer 
const reducer = combineReducers({
  loadJobs:  loadJobReducer,
  jobTypeAll: loadJobTypeReducer
  
});

//initial state 
let initialState = {};
const middleWare = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))


export default store;

