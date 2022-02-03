import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

const API_URL = 'http://localhost:8000/api/v1/users';

export const loginUser = async () => {
  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    let res = await axios(`${API_URL}/login`, reqOptions);
    let data = res.data;

    console.log('The data is here:', data);
    if (data.userData) {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem('userData', JSON.stringify(data));
      return data;
    }
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, error: error });
  }
};
