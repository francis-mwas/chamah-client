import React, { createContext, useReducer } from 'react';
import { usersInitialState, UserListReducer } from 'reducers/userReducer';

export const UserStateContext = createContext();
export const UserStateDispatch = createContext();

export const UserContextProvider = ({ children }) => {
  const [members, dispatch] = useReducer(UserListReducer, usersInitialState);
  return (
    <UserStateContext.Provider value={members}>
      <UserStateDispatch.Provider value={dispatch}>
        {children}
      </UserStateDispatch.Provider>
    </UserStateContext.Provider>
  );
};
