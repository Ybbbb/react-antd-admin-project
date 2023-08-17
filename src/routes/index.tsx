import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const routers: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('../pages/Home')),
  },
  {
    path: '/header',
    Component: lazy(() => import('../pages/Header')),
  },
];

export default routers;
