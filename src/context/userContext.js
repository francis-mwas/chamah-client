import React, { createContext, useReducer } from 'react';
import { usersInitialState, UserListReducer } from 'reducers/userReducer';

export const UserStateContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(UserListReducer, usersInitialState);

  return (
    <UserStateContext.Provider value={users}>
      {children}
    </UserStateContext.Provider>
  );
};
