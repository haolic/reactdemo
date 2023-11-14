import Layout from '@/layout';
import HelloWorld from '@/pages/Threejs/HelloWorld';
import Line from '@/pages/Threejs/Line';

export default {
  path: '/threejs',
  name: 'threejs',
  Component: Layout,
  children: [
    {
      path: 'hello-world',
      name: '你好世界-正方体',
      Component: HelloWorld,
    },
    {
      path: 'line',
      name: '画线',
      Component: Line,
    },
  ],
};
