import Layout from '@/layout';
import demoRoutes from './demo-routes';
import React from 'react';

export interface RouteItem {
  path: string;
  name?: string;
  Component: React.FC;
  children?: RouteItem[];
}

export default [
  demoRoutes,

  {
    path: '/p5',
    name: 'P5js',
    Component: Layout,
    children: [],
  },
] as RouteItem[];
