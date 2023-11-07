import { lazy } from "react";

import IRoute from "./Types/Route";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    element: Home,
    index: true,
  },
  {
    path: "/login",
    element: Login,
    index: false,
  },
  {
    path: "/register",
    element: Register,
    index: false,
  },
];
