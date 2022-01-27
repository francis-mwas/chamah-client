import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from 'Hooks';

const PrivateRoutes = () => {
  const userDetails = useAuthState();
  const token = false;
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && Boolean(token) ? (
          <Redirect to={{ pathname: '/login' }} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export default PrivateRoutes;
