import React, { useContext } from 'react';
import { UserStateContext } from '../context';

export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserContextProvider');
  }

  return context;
};
