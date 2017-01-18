// React
import React from 'react';
import { Link, withRouter } from 'react-router';
// Components
import Header from './header/header_container'
import RightSidebarContainer from './sidebars/right_sidebar_container';
import LeftSidebar from './sidebars/left-sidebar';

const App = ({children, location}) => {
return(
  <div>
    <Header />
    <LeftSidebar />
    <RightSidebarContainer location={location} />
    {children}
  </div>
);
}

export default App;
