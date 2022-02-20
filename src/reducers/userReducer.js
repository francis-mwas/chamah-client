import React, { useState, useReducer } from 'react';
import {
  USER_LOGIN_REQUEST,
  SET_CURRENT_USER,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LIST_FAIL,
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

export const INITIAL_STATE = {
  authenticated: false,
  errorMessage: '',
  loading: false,
  user: {},
};

export const usersInitialState = {
  members: [],
};

export const UserListReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
        members: [],
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        laoding: false,
        members: action.payload,
      };
    case USER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        errorMessage: '',
        loading: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        message: '',
        status: '',
        token: '',
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
