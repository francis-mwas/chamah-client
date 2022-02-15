import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../commons/setAuthToken';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/userConstants';

const API_URL = 'http://localhost:8000/api/v1/';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loginUser = async (dispatch, loginPayload) => {
  const { email, password } = loginPayload;

  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    // let res = await axios(`${API_URL}users/login`, reqOptions);
    const { data } = await axios.post(
      `${API_URL}users/login`,
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userData', JSON.stringify(data));
    setAuthToken(data.data);
    let decoded = jwt_decode(data.data);
    console.log('The data i received from the server: ', decoded);
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
// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const getAllUsers = async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.post(`${API_URL}users/`);
    if (data) {
      dispatch({ type: USER_LIST_SUCCESS, payload: data });
    }
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
  localStorage.removeItem('userData');
};
