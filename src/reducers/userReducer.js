import React, { useState, useReducer } from 'react';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

let msgResponse = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData')).message
  : '';
let resStatus = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData')).status
  : '';
let token = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData')).data
  : '';

export const initialState = {
  message: '' || msgResponse,
  token: '' || token,
  respStatus: '' || resStatus,
  loading: false,
  errorMessage: null,
};

console.log('The initial state: ', initialState);

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...initialState,
        message: action.payload.message,
        token: action.payload.token,
        loading: false,
      };
    case USER_LOGOUT:
      return {
        ...initialState,
        message: '',
        status: '',
        token: '',
      };

    case USER_LOGIN_FAIL:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
