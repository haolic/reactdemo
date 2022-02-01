import React from 'react';

const Content = props => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: 'calc(100vw - 200px)', overflow: 'auto' }}>
      {props.children}
    </div>
  );
};

export default Content;
