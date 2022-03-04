import React, { createContext, useReducer } from 'react';
import {
  usersInitialState,
  UserListReducer,
  listUserDetailReducer,
  AddNewUserReducer,
} from 'reducers/userReducer';

export const UserStateContext = createContext();
export const UserStateDispatch = createContext();

export const UserContextProvider = ({ children }) => {
  const [members, dispatch] = useReducer(UserListReducer, usersInitialState);
  const [userDetails, userDetailsDispatch] = useReducer(
    listUserDetailReducer,
    {}
  );
  const [addMembers, addMembersDispatch] = useReducer(AddNewUserReducer, {});
  return (
    <UserStateContext.Provider value={{ members, userDetails, addMembers }}>
      <UserStateDispatch.Provider
        value={{ dispatch, userDetailsDispatch, addMembersDispatch }}
      >
        {children}
      </UserStateDispatch.Provider>
    </UserStateContext.Provider>
  );
};
