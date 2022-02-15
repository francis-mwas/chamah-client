import React, { createContext, useReducer } from 'react';
import { initialState, AuthReducer } from 'reducers/userReducer';

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
