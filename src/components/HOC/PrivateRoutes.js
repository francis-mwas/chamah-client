import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from 'Hooks';

const PrivateRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  const userDetails = useAuthState();
  const token = false;

  rreturn(
    <Route
      path={path}
      render={(props) =>
        isPrivate && !Boolean(userDetails.token) ? (
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
