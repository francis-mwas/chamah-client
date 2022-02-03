import React from 'react';
import { UserAuthContext } from 'context';

export const useAuthState = () => {
  const context = React.useContext(UserAuthContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
};
