import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

const API_URL = 'localhost:3000/users';

export const loginUser = async () => {
  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    let res = await axios(`${ROOT_URL}` / login, reqOptions);
    let data = res.data;
    if (data.userData) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem('userData', JSON.stringify(data));
      return data;
    }
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, error: error });
  }
};
