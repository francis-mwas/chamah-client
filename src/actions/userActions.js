import axios from 'axios';
import setAuthToken from '../commons/setAuthToken';
import { API_URLs } from '../utils/api-config';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LOGIN_SUCCESS,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
} from '../constants/userConstants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};
const API_URL = 'http://localhost:8000/api/v1/';

export const loginUser = async (dispatch, loginPayload) => {
  const url = window.location.hostname;
  console.log('This is the url we are looking for: ', url);
  const { email, password } = loginPayload;

  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    // let res = await axios(`${API_URL}users/login`, reqOptions);
    const { data } = await axios.post(
      `${API_URL}users/login`,
      { email, password },
      config
    );
    setAuthToken(data.data);
    // console.log('The data i received from the server: ', decoded);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('AUTH_TOKEN', data.data);
    return data;
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUserDetails = async (dispatch, id) => {
  try {
    dispatch({ type: USER_DETAIL_REQUEST });
    const { data } = await axios.get(`${API_URL}users/${id}`);

    if (data) {
      dispatch({ type: USER_DETAIL_SUCCESS, payload: data.data });
    }
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getAllUsers = async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get(`${API_URL}users/`);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logOut = (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem('AUTH_TOKEN');
  setAuthToken();
};
