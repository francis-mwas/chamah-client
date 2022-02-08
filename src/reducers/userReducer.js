import React, { useState, useReducer } from 'react';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

let user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).user
  : '';
let token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).auth_token
  : '';

export const initialState = {
  user: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
};

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
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };
    case USER_LOGOUT:
      return {
        ...initialState,
        user: '',
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
