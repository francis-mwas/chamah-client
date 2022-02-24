import React, { useContext } from 'react';
import { ContributionsDispatch } from '../context';

export const useContributionDispatch = () => {
  const context = useContext(ContributionsDispatch);
  if (context === undefined) {
    throw new Error(
      'useContributionDispatch must be used within a ContributionsContextProvider'
    );
  }
  return context;
};
