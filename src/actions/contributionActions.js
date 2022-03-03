import axios from 'axios';
import {
  CONTRIBUTION_LIST_REQUEST,
  CONTRIBUTION_LIST_SUCCESS,
  CONTRIBUTION_LIST_FAIL,
  CONTRIBUTION_DETAIL_REQUEST,
  CONTRIBUTION_DETAIL_SUCCESS,
  CONTRIBUTION_DETAIL_FAIL,
  ADD_CONTRIBUTION_REQUEST,
  ADD_CONTRIBUTION_SUCCESS,
  ADD_CONTRIBUTION_FAIL,
} from '../constants/contributionConstants';

// const API_URL = 'http://localhost:8000/api/v1/';
const API_URL = 'https://jamhurican.herokuapp.com/api/v1/';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getSingleContribution = async (dispatch, contributionId) => {
  try {
    dispatch({ type: CONTRIBUTION_DETAIL_REQUEST });
    const { data } = await axios.get(
      `${API_URL}/contribution/${contributionId}/`
    );
    console.log('The contribution details: ', data);
    if (data) {
      dispatch({ type: CONTRIBUTION_DETAIL_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: CONTRIBUTION_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addContribution = async (dispatch, payload) => {
  const { amount, amountPaid, dateDeposited, userId } = payload;

  try {
    dispatch({ type: ADD_CONTRIBUTION_REQUEST });

    const { data } = await axios.post(
      `${API_URL}/add?userId=${userId}`,
      { amount, amountPaid, dateDeposited },
      config
    );
    console.log('The data i received from the server: ', data);
    dispatch({ type: ADD_CONTRIBUTION_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: ADD_CONTRIBUTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllContributions = async (dispatch) => {
  try {
    dispatch({ type: CONTRIBUTION_LIST_REQUEST });
    const { data } = await axios.get(`${API_URL}/`);
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
