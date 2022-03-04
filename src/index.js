import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/animate.min.css';
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0';
import './assets/css/demo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Login from 'views/Login/index.js';
import AdminLayout from 'layouts/Admin';
import Login from 'views/Login';

import {
  AuthContextProvider,
  UserContextProvider,
  ContributionsContextProvider,
} from '../src/context';
import PrivateRoutes from '../src/components/HOC/PrivateRoutes';

ReactDOM.render(
  <AuthContextProvider>
    <UserContextProvider>
      <ContributionsContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoutes
              path="/admin"
              render={(props) => <AdminLayout {...props} />}
            />
          </Switch>
        </BrowserRouter>
        ,
      </ContributionsContextProvider>
    </UserContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
