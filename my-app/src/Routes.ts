import { lazy } from "react";

import IRoute from "./Types/Route";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const LoginDefault = lazy(() => import("./pages/Login/LoginDefault"));
const Register = lazy(() => import("./pages/Login/Register"));
const RegitserDefault = lazy(() => import("./pages/Login/RegisterDefault"));
const ProjectAdd = lazy(() => import("./components/CreateProjectSample"));

export const privateRoutes: IRoute[] = [
  {
    path: "/main",
    element: Home,
    index: true,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    element: Login,
    index: true,
  },
  {
    path: "/register",
    element: Register,
    index: false,
  },
  {
    path: "/login",
    element: Home,
    index: false,
  },
  {
    path: "/register1",
    element: RegitserDefault,
    index: false,
  },
];
