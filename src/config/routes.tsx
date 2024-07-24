import demoRoutes from './demo-routes';
import React from 'react';
import homeRoutes from './home-routes';
import Page404 from '@/pages/404';

export interface RouteItem {
  path: string;
  name?: string;
  Component: React.FC;
  children?: RouteItem[];
}

export default [
  homeRoutes,
  demoRoutes,
  {
    path: '*',
    Component: Page404,
  },
];
