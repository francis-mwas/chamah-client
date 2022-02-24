import axios from 'axios';
import {
  CONTRIBUTION_LIST_REQUEST,
  CONTRIBUTION_LIST_SUCCESS,
  CONTRIBUTION_LIST_FAIL,
  CONTRIBUTION_DETAIL_REQUEST,
  CONTRIBUTION_DETAIL_SUCCESS,
  CONTRIBUTION_DETAIL_FAIL,
} from '../constants/contributionConstants';

const API_URL = 'http://localhost:8000/api/v1/';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getSingleContribution = async (dispatch, contributionId) => {
  try {
    dispatch({ type: CONTRIBUTION_DETAIL_REQUEST });
    const { data } = await axios.get(
      `${API_URL}contributions/contribution/${contributionId}`
    );
    dispatch({ type: CONTRIBUTION_DETAIL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: CONTRIBUTION_DETAIL_FAIL,
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
