import About from '../pages/About';
import Help from '../pages/Help';
import Home from '../pages/Home';
import Redux from '../pages/Redux';
import Onepx from '../pages/Onepx';
import Progress from '../pages/Progress';
import Debounce from '../pages/Debounce';
import Worker from '../pages/Worker';

export default [
  {
    name: 'web worker',
    path: '/worker',
    component: Worker
  },
  {
    name: '防抖',
    path: '/debounce',
    component: Debounce
  },
  {
    name: '进度条',
    path: '/progress',
    component: Progress,
  },
  {
    name: '1px问题',
    path: '/1px',
    component: Onepx,
  },
  {
    name: '首页',
    path: '/home',
    component: Home,
  },
  {
    name: '帮助',
    path: '/help',
    component: Help,
  },
  {
    name: '关于',
    path: '/about',
    component: About,
  },
  {
    name: 'redux',
    path: '/redux',
    component: Redux,
  },
];
