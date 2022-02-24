import React, { createContext, useReducer } from 'react';
import {
  contributionsInitialState,
  ContributionsListReducer,
  getContributionDetail,
} from '../reducers/contributionReducer';

export const ContributionsContext = createContext();
export const ContributionsDispatch = createContext();

export const ContributionsContextProvider = ({ children }) => {
  const [contributions, contributionsDispatch] = useReducer(
    ContributionsListReducer,
    contributionsInitialState
  );
  const [contributionDetail, contribDetailDispatch] = useReducer(
    getContributionDetail,
    {}
  );

  return (
    <ContributionsContext.Provider
      value={{ contributions, contributionDetail }}
    >
      <ContributionsDispatch.Provider
        value={{ contributionsDispatch, contribDetailDispatch }}
      >
        {children}
      </ContributionsDispatch.Provider>
    </ContributionsContext.Provider>
  );
};
