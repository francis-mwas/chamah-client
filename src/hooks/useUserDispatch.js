import React, { useContext } from 'react';
import { UserStateDispatch } from '../context';

export const useUserDispatch = () => {
  const context = useContext(UserStateDispatch);
  if (context === undefined) {
    throw new Error(
      'useUserDispatch must be used within a UserContextProvider'
    );
  }
  return context;
};
