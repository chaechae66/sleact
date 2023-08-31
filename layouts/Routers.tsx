import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import loadable from '@loadable/component';
import Channel from '@pages/Channel';

const SignUp = loadable(() => import('@pages/SignUp'));
const LogIn = loadable(() => import('@pages/LogIn'));

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
]);

export default Routers;
