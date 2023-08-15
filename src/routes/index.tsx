import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';

const routers: Array<RouteObject> = [
  {
    path: '/',
    element: <Home/>,
  },
];

export default routers;
