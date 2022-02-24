import React, { createContext, useReducer } from 'react';
import {
  contributionsInitialState,
  ContributionsListReducer,
} from '../reducers/contributionReducer';

export const ContributionsContext = createContext();
export const ContributionsDispatch = createContext();

export const ContributionsContextProvider = ({ children }) => {
  const [contributions, contributionsDispatch] = useReducer(
    ContributionsListReducer,
    contributionsInitialState
  );

  return (
    <ContributionsContext.Provider value={{ contributions }}>
      <ContributionsDispatch.Provider value={{ contributionsDispatch }}>
        {children}
      </ContributionsDispatch.Provider>
    </ContributionsContext.Provider>
  );
};
