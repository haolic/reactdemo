import React from 'react';
import Header from './Header';
import Content from './Content';

const Layout = props => {
  return (
    <>
      <Header></Header>
      <Content>{props.children}</Content>
    </>
  );
};

export default Layout;
