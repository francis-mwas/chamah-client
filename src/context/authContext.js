import React, { createContext, useReducer } from 'react';
import { INITIAL_STATE, AuthReducer } from 'reducers/userReducer';

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
