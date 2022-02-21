import React from 'react';
import { useLocation, Switch } from 'react-router-dom';
import PrivateRoutes from '../components/HOC/PrivateRoutes';

import AdminNavbar from 'components/Navbars/AdminNavbar';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';
import FixedPlugin from 'components/FixedPlugin/FixedPlugin.js';

import routes from 'routes.js';

import sidebarImage from 'assets/img/sidebar-3.jpg';

function Admin(props) {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState('black');
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  console.log('The routing!!:', routes.adminLayout);
  const getRoutes = (routes) => {
    return routes.adminLayout.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <PrivateRoutes
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
      var element = document.getElementById('bodyClick');
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ''} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar props={props} />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;
