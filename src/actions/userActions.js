import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

const API_URL = 'http://localhost:8000/api/v1/';

export const loginUser = async (dispatch, loginPayload) => {
  // const reqOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(loginPayload),
  // };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
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

export const logOut = (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem('userData');
};
