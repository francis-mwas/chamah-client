import React from 'react';
import { Redirect, useHistory, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import cleanToken from 'helpers/cleanBearerToken';
import setAuthToken from 'commons/setAuthToken';
import { useAuthState, useAuthDispatch } from 'hooks';
import { logOut } from '../../actions/userActions';

const PrivateRoutes = ({ ...rest }) => {
  const userDetails = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();
  console.log('User details: ', userDetails.authenticated);
  if (!userDetails || !userDetails.authenticated) {
    return <Redirect to={{ pathname: '/' }} />;
  }
  const token = localStorage.getItem('AUTH_TOKEN');
  console.log('The token: ', token);
  // Check for token
  if (token) {
    // Set auth token header auth
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    // store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      logOut(dispatch);
      // Redirect to login
      history.push('/');
    }
  }

  // let user through if they're logged in
  return <Route {...rest} />;
};
export default PrivateRoutes;
