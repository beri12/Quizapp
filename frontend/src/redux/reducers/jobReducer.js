import {JOB_LOAD_FAIL, JOB_LOAD_REQUEST,JOB_LOAD_SUCCESS,JOB_LOAD_RESET} from '../constants/jobconstat'



export const loadJobReducer = (state={jobs:[]}, action) => {
  switch (action.type) {
    case JOB_LOAD_REQUEST:
      return { loading: true };
    case JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        Pages: action.payload.page,
        count: action.payload.count,
        SetUniqeLocation: action.payload.SetUniqeLocation,
        jobs: action.payload.jobs,
      };

    case JOB_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload
        
      }
      case JOB_LOAD_RESET:
      return {}

  

    default:
      return state;
  }
}