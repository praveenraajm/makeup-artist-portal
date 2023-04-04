import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Basic from "layouts/Basic";

const Login = lazy(() => import(/* webpackChunkName: "Login" */ 'pages/Login/Login'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ 'pages/Home/Home'));
const Menu1 = lazy(() => import(/* webpackChunkName: "Menu1" */ 'pages/Menu1/Menu1'));
const Menu2 = lazy(() => import(/* webpackChunkName: "Menu2" */ 'pages/Menu2/Menu2'));

const Feature = lazy(() => import(/* webpackChunkName: "Feature" */ 'pages/Feature/Feature'));

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Basic />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'home', element: <Home /> },
        { path: 'menu1', element: <Menu1 /> },
        { path: 'menu2', element: <Menu2 /> },
        { path: 'feature', element: <Feature /> },
        { path: '/', element: <Navigate to="/feature" /> }
      ]
    },
    { path: '*', element: <Navigate to="/login" replace /> }
  ]);
}
