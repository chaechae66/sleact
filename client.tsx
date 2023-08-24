import Routers from "@layouts/Routers";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>
);
// pages - 서비스 페이지
// components - 짜잘 컴포넌트
// layouts - 공통 레이아웃
