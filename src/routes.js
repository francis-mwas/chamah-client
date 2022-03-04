import Dashboard from 'views/Dashboard.js';
import Login from './views/Login.js';
import UserProfile from 'views/UserProfile.js';
// import TableList from 'views/ListUsers';
import ListUsers from 'views/ListUsers';
import ContributionDetails from 'views/ContributionDetails';
import AddContribution from 'views/AddContribution';
import AddMember from 'views/addMember';
import Contributions from 'views/Contributions';
import Typography from 'views/Typography.js';
import Icons from 'views/Icons.js';
import Maps from 'views/Maps.js';
import Notifications from 'views/Notifications.js';
// import Upgrade from 'views/Upgrade.js';

const appRoutes = {
  loginPage: {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  adminLayout: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'nc-icon nc-chart-pie-35',
      component: Dashboard,
      layout: '/admin',
      isPrivate: true,
    },

    {
      path: '/members',
      name: 'Members',
      icon: 'nc-icon nc-notes',
      component: ListUsers,
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
    // {
    //   path: '/notifications',
    //   name: 'Notifications',
    //   icon: 'nc-icon nc-bell-55',
    //   component: Notifications,
    //   layout: '/admin',
    //   isPrivate: true,
    // },
    {
      path: '/user',
      hide: true,
      name: 'User Profile',
      icon: 'nc-icon nc-circle-09',
      component: UserProfile,
      layout: '/admin',
      isPrivate: true,
    },
    {
      path: '/contribution-details',
      hide: true,
      name: '',
      icon: 'nc-icon nc-circle-09',
      component: ContributionDetails,
      layout: '/admin',
      isPrivate: true,
    },
    {
      path: '/add-contribution',
      hide: true,
      name: 'add contribution',
      icon: 'nc-icon nc-notes',
      layout: '/admin',
      component: AddContribution,
      isPrivate: true,
    },
    {
      path: '/add-member',
      hide: true,
      name: 'add a new member',
      icon: 'nc-icon nc-notes',
      layout: '/admin',
      component: AddMember,
      isPrivate: true,
    },
  ],
};

export default appRoutes;
