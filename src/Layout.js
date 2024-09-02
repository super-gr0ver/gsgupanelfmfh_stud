import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

function Layout() {
  return (
    <div className='app'>
      <Header />
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default Layout;
