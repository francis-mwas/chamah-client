import React, { createContext, useReducer } from 'react';
import { usersInitialState, UserListReducer } from 'reducers/userReducer';

export const UserStateContext = createContext();


export const UserContextProvider = ({ children }) => {
  const [usersList, dispatch] = useReducer(UserListReducer, usersInitialState);

  return (
    <UserStateContext.Provider value={usersList}>
      {children}
    </UserStateContext.Provider>
  );
};
