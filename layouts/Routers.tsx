import { createBrowserRouter } from "react-router-dom";
import React from "react";
import SignUp from "@pages/SignUp";
import LogIn from "@pages/LogIn";

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