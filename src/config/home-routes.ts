import HeaderLayout from '@/layout/HeaderLayout';
import HomePage from '@/pages/HomePage';

export default {
  path: '/',
  Component: HeaderLayout,
  name: '首页',
  children: [
    {
      path: 'home',
      Component: HomePage,
    },
  ],
};
