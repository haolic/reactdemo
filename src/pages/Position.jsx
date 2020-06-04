import React from 'react';

const Position = () => {
  return (
    <div style={{ height: 300, border: '1px solid #f90', overflow: 'auto', position: 'relative' }}>
      <div
        style={{
          background: '#999',
          transform: 'translate(30px, 30px)'
        }}
      >
        xxx
      </div>
      <div>yyy</div>
    </div>
  );
};
Position.label = '位置';
export default Position;
