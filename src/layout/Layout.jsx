import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Content from './Content';

const Layout = (props) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Header></Header>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default Layout;
