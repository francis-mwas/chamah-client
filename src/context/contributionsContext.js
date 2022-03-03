import React, { createContext, useReducer } from 'react';
import {
  contributionsInitialState,
  ContributionsListReducer,
  getContributionDetail,
  ADD_INI_STATE,
  addContribution,
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
  const [addUserContribution, addUserContribDispatch] = useReducer(
    addContribution,
    ADD_INI_STATE
  );

  return (
    <ContributionsContext.Provider
      value={{ contributions, contributionDetail, addUserContribution }}
    >
      <ContributionsDispatch.Provider
        value={{
          contributionsDispatch,
          contribDetailDispatch,
          addUserContribDispatch,
        }}
      >
        {children}
      </ContributionsDispatch.Provider>
    </ContributionsContext.Provider>
  );
};
