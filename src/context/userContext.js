import React, { createContext, useReducer } from 'react';
import {
  usersInitialState,
  UserListReducer,
  listUserDetailReducer,
} from 'reducers/userReducer';

export const UserStateContext = createContext();
export const UserStateDispatch = createContext();

export const UserContextProvider = ({ children }) => {
  const [members, dispatch] = useReducer(UserListReducer, usersInitialState);
  const [userDetails, userDetailsDispatch] = useReducer(
    listUserDetailReducer,
    {}
  );
  return (
    <UserStateContext.Provider value={{ members, userDetails }}>
      <UserStateDispatch.Provider value={{ dispatch, userDetailsDispatch }}>
        {children}
      </UserStateDispatch.Provider>
    </UserStateContext.Provider>
  );
};
