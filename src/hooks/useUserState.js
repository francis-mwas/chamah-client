import React, { useContext } from 'react';
import { UserStateContext } from '../context';

export const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a AuthProvider');
  }

  return context;
};
