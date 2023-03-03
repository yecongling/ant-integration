/**
 * 路由
 */
import {RouteItem} from "@/types/router";
import {Navigate, useRoutes} from "react-router-dom";
import BasicLayout from "@/layouts/BasicLayout";
import Login from "@/views/user/Login";
import {lazy} from "react";
import lazyLoad from "@/utils/lazyLoad";

export const rootRouter: RouteItem[] = [
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/login",
    element: <Login/>,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  {
    element: <BasicLayout/>,
    children: [
      {
        path: "/home",
        element: lazyLoad(lazy(() => import('@/views/Home'))),
        meta: {
          title: "首页",
          key: "home",
          requiresAuth: false
        }
      }, {
        path: "/system/menu",
        element: lazyLoad(lazy(() => import('@/views/system/Menu'))),
        meta: {
          title: "菜单管理",
          key: "menu",
          requiresAuth: false
        }
      },
      {
        path: "/system/role",
        element: lazyLoad(lazy(() => import('@/views/system/Role'))),
        meta: {
          title: "角色管理",
          key: "role",
          requiresAuth: false
        }
      },
      {
        path: "/system/user",
        element: lazyLoad(lazy(() => import('@/views/system/User'))),
        meta: {
          title: "用户管理",
          key: "user",
          requiresAuth: false
        }
      }
    ]
  }
];

const Router = () => {
  return useRoutes(rootRouter);
};
export default Router;