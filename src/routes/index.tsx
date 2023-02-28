/**
 * 路由
 */
import {RouteItem} from "@/types/router";
import {Navigate, useRoutes} from "react-router-dom";
import BasicLayout from "@/layouts/BasicLayout";
import Home from "@/views/Home";
import Login from "@/views/user/Login";

export const rootRouter: RouteItem[] = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/login",
        element: <Login />,
        meta: {
            requiresAuth: false,
            title: "登录页",
            key: "login"
        }
    },
    {
        element: <BasicLayout />,
        children: [
            {
                path: "/home",
                element: <Home/>,
                meta: {
                    title: "首页",
                    key: "home",
                    requiresAuth: true
                }
            }
        ]
    }
];

const Router = ()=> {
    return useRoutes(rootRouter);
};
export default Router;