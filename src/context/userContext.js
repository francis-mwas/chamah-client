import React, { createContext, useReducer } from 'react';
import {
  usersInitialState,
  UserListReducer,
  listUserDetailReducer,
  AddNewUserReducer,
  deleteUserReducer,
} from 'reducers/userReducer';

export const UserStateContext = createContext();
export const UserStateDispatch = createContext();

export const UserContextProvider = ({ children }) => {
  const [members, userListDispatch] = useReducer(UserListReducer, usersInitialState);
  const [userDetails, userDetailsDispatch] = useReducer(
    listUserDetailReducer,
    {}
  );
  const [deleteMsg, deleteDispatch] = useReducer(deleteUserReducer, {});
  const [addMembers, addMembersDispatch] = useReducer(AddNewUserReducer, {});
  return (
    <UserStateContext.Provider
      value={{ members, userDetails, addMembers, deleteMsg }}
    >
      <UserStateDispatch.Provider
        value={{
         userListDispatch,
          userDetailsDispatch,
          addMembersDispatch,
          deleteDispatch,
        }}
      >
        {children}
      </UserStateDispatch.Provider>
    </UserStateContext.Provider>
  );
};
