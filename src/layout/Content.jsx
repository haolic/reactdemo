import React from 'react';

const Content = props => {
  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 48px)', overflow: 'auto' }}>
      {props.children}
    </div>
  );
};

export default Content;
