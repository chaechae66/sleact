import { createBrowserRouter } from "react-router-dom";
import React from "react";
import loadable from '@loadable/component';

const SignUp = loadable(()=>import("@pages/SignUp"));
const LogIn = loadable(()=>import("@pages/LogIn"));

const Routers = createBrowserRouter([
    {
        path:"/",
        element:<LogIn />
    },
    {
        path:"/login",
        element : <LogIn />
    },
    {
        path:"/signup",
        element : <SignUp />
    },
]);

export default Routers