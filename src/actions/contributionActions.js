import axios from 'axios';
import {
  CONTRIBUTION_LIST_REQUEST,
  CONTRIBUTION_LIST_SUCCESS,
  CONTRIBUTION_LIST_FAIL,
} from '../constants/contributionConstants';

// const API_URL = 'http://localhost:8000/api/v1/';
const API_URL  = 'https://jamhurican.herokuapp.com/api/v1/';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getAllContributions = async (dispatch) => {
  try {
    dispatch({ type: CONTRIBUTION_LIST_REQUEST });
    const { data } = await axios.get(`${API_URL}contributions/`);
    dispatch({ type: CONTRIBUTION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      CONTRIBUTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
