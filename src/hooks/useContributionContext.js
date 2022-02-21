import React, { useContext } from 'react';
import { ContributionsContext } from '../context';

export const useContributionContext = () => {
  const context = useContext(ContributionsContext);
  if (context === undefined) {
    throw new Error(
      'useContributionContext must be used within a ContributionsContextProvider'
    );
  }

  return context;
};
