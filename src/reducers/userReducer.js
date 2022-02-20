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

let token = localStorage.getItem('AUTH_TOKEN') ? true : false;

export const INITIAL_STATE = {
  authenticated: token,
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
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        authenticated: true,
        user: action.payload,
        errorMessage: '',
        loading: false,
      };
    case USER_LOGOUT:
      return {
        message: '',
        status: '',
        token: '',
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
