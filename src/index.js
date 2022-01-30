import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0';
import './assets/css/demo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import AdminLayout from 'layouts/Admin.js';
import PrivateRoutes from '../src/components/HOC/PrivateRoutes';
import routes from '../src/routes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect to="/login" />
      {/* {routes.map((route) => (
        <PrivateRoutes
          key={route.path}
          path={route.path}
          component={route.component}
          isPrivate={route.isPrivate}
        />
      ))} */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
