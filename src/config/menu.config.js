import React from 'react';

const context = require.context('../pages', true, /\.(jsx)$/);
const allKeys = context.keys();
const componentList = [];
allKeys.forEach(key => {
  const comp = context(key);
  const resPath = context.resolve(key);
  let path = key;
  if (key.includes('/index.jsx')) {
    path = key.replace('/index.jsx', '');
  }
  componentList.push({
    name: comp.default && (comp.default.label || comp.default.name || '未命名'),
    path: path.split('.')[1],
    component:
      comp.default ||
      (() => (
        <div style={{ fontSize: 20, padding: 30 }}>
          找不到页面, 请检查路径
          <code
            style={{
              background: 'rgba(0, 0, 0, 0.1)',
              marginLeft: 5,
              padding: '0 3px',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              borderRadius: 4,
            }}
          >
            {resPath.substr(2)}
          </code>
        </div>
      )),
  });
});

export default componentList;
