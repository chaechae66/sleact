import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import loadable from '@loadable/component';

const SignUp = loadable(() => import('@pages/SignUp'));
const LogIn = loadable(() => import('@pages/LogIn'));
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/workspace/channel',
    element: <Channel />,
  },
  {
    path: '/workspace/dm',
    element: <DirectMessage />,
  },
]);

export default Routers;
