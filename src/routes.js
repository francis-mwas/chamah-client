/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from 'views/Dashboard.js';
import Login from 'views/Login';
import UserProfile from 'views/UserProfile.js';
import TableList from 'views/TableList.js';
import Contributions from 'views/Contributions';
import Typography from 'views/Typography.js';
import Icons from 'views/Icons.js';
import Maps from 'views/Maps.js';
import Notifications from 'views/Notifications.js';
import Upgrade from 'views/Upgrade.js';

const dashboardRoutes = [
  {
    path: '/login',
    name: 'User Login',
    icon: 'nc-icon nc-circle-06',
    component: Login,
    isPrivate: false,
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-chart-pie-35',
    component: Dashboard,
    layout: '/admin',
    isPrivate: true,
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: 'nc-icon nc-circle-09',
    component: UserProfile,
    layout: '/admin',
    isPrivate: true,
  },
  {
    path: '/table',
    name: 'Members',
    icon: 'nc-icon nc-notes',
    component: TableList,
    layout: '/admin',
    isPrivate: true,
  },
  {
    path: '/contributions',
    name: 'Contributions',
    icon: 'nc-icon nc-paper-2',
    component: Contributions,
    layout: '/admin',
    isPrivate: true,
  },
  // {
  //   path: '/typography',
  //   name: 'Typography',
  //   icon: 'nc-icon nc-paper-2',
  //   component: Typography,
  //   layout: '/admin',
  //   isPrivate: true,
  // },
  // {
  //   path: '/icons',
  //   name: 'Icons',
  //   icon: 'nc-icon nc-atom',
  //   component: Icons,
  //   layout: '/admin',
  //   isPrivate: true,
  // },
  // {
  //   path: '/maps',
  //   name: 'Maps',
  //   icon: 'nc-icon nc-pin-3',
  //   component: Maps,
  //   layout: '/admin',
  //   isPrivate: true,
  // },
  // {
  //   upgrade: true,
  //   path: '/upgrade',
  //   name: 'Upgrade to PRO',
  //   icon: 'nc-icon nc-alien-33',
  //   component: Upgrade,
  //   layout: '/admin',
  //   isPrivate: true,
  // },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'nc-icon nc-bell-55',
    component: Notifications,
    layout: '/admin',
    isPrivate: true,
  },
];

export default dashboardRoutes;
