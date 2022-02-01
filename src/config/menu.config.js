import NotFound from '../components/404';

const context = require.context('../pages', true, /\.(jsx)$/);
const allKeys = context.keys();
const componentList = [];
allKeys.forEach((key) => {
  const comp = context(key);
  let path = key;
  if (key.includes('/index.jsx')) {
    path = key.replace('/index.jsx', '');
  }
  componentList.push({
    name: comp.default && (comp.default.label || comp.default.name || path),
    path: path.split('.')[1],
    component: comp.default,
  });
});

componentList.push({
  name: '找不到页面',
  path: '/*',
  component: NotFound,
});

export default componentList;
