import axios from 'axios';
import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS } from "../constants/jobconstat"


export const jobLoadAction = (pageNumber, keyword = '', cat = '', location =  '')=> async(dispacth)=>{
  dispacth({type: JOB_LOAD_REQUEST});
  try {
    const {data} = await  axios.get(`/api/jobs/show/?pageNumber=${pageNumber}$keyword=${keyword}&cat=${cat}&location=${location}`);
    dispacth({
      type: JOB_LOAD_SUCCESS,
      payload: data
    });

  }catch(error) {
    dispacth({
      type: JOB_LOAD_FAIL,
      payload: error.response.data.error
    });

  }

}