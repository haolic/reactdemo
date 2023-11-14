import demoRoutes from './demo-routes';
import React from 'react';
import homeRoutes from './home-routes';
import threejsRoutes from './threejs-routes';

export interface RouteItem {
  path: string;
  name?: string;
  Component: React.FC;
  children?: RouteItem[];
}

export default [homeRoutes, demoRoutes, threejsRoutes] as RouteItem[];
