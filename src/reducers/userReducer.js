import React, { useState, useReducer } from 'react';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LIST_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
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

//list user details
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
//delete user details
export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        laoding: false,
        message: action.payload,
      };
    case DELET_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
//list user details
export const listUserDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAIL_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
//add user
export const AddNewUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
      };
    case ADD_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
//auth reducer
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
