import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/animate.min.css';
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0';
import './assets/css/demo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Login from 'views/login';
import AdminLayout from 'layouts/Admin.js';
import PrivateRoutes from '../src/components/HOC/PrivateRoutes';
import routes from '../src/routes';

const userData = {
  token: false,
  isPrivate: true,
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/admin/dashboard" component={AdminLayout} />
      {/* <PrivateRoutes
        render={(props) =>
          userData.isPrivate && !Boolean(userData.token) ? (
            <Redirect to="/login" />
          ) : (
            <AdminLayout {...props} />
          )
        }
      /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
