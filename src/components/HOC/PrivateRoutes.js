import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from 'hooks';

const PrivateRoutes = ({ ...rest }) => {
  const userDetails = useAuthState();

  if (!userDetails || userDetails.token === '') {
    return <Redirect to={{ pathname: '/' }} />;
  }

  // let user through if they're logged in
  return <Route {...rest} />;
};
export default PrivateRoutes;
