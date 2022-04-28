import NotFound from '../components/404';

const context = require.context('../pages', true, /\.((j|t)sx)$/);
const allKeys = context.keys().filter((k) => {
  const strArr = k.split('/');
  if (strArr.length > 2 && !k.includes('index.')) {
    return false;
  } else {
    return true;
  }
});

const componentList = [];
allKeys.forEach((key) => {
  const comp = context(key);
  let path = key;
  if (key.includes('/index.jsx')) {
    path = key.replace('/index.jsx', '');
  }
  if (key.includes('/index.tsx')) {
    path = key.replace('/index.tsx', '');
  }
  componentList.push({
    name:
      comp.default &&
      (comp.default.label || comp.default.title || comp.default.name || path),
    path: path.split('.')[1],
    component: comp.default,
  });
});

componentList.push({
  name: '找不到页面',
  path: '/page404',
  component: NotFound,
});

export default componentList;
