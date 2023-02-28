import {RouteItem} from "@/services/system/model/menuModel";
import {RouteObject} from "@/routes/interface";
import {rootRouter} from "@/routes";
import lazyLoad from "@/utils/lazyLoad";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";

/**
 * @description 使用递归处理路由菜单，生成一维数组，做菜单权限判断
 * @param {Array} routerList 所有菜单列表
 * @param {Array} newArr 菜单的一维数组
 * @param menuList 构建的路由信息
 * @return array
 */
export function handleRouter(routerList: RouteItem[], newArr: string[] = [], menuList: RouteObject[] = []) {
    routerList.forEach((item: RouteItem) => {
        let menu: RouteObject = {};
        if(typeof item === "object" && item.path) {
            newArr.push(item.path);
            menu['path'] = item.path
            if (item.component.includes("layouts")) {
                menu['element'] = lazyLoad(React.lazy(() => import("@/layouts/BasicLayout")));
            } else {
                menu['element'] = lazyLoad(React.lazy(() => import("@/pages/" + item.component)));
            }
            menuList.push(menu);
        }
        if (item.children && item.children.length) {
            menu.children = [];
            handleRouter(item.children, newArr, menu.children);
        }
    });
    rootRouter.push({
        element: <BasicLayout />,
        children: menuList
    })
    return newArr;
}

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string) => {
    let newStr: string = "";
    let newArr: any[] = [];
    let arr = path.split("/").map(i => "/" + i);
    for (let i = 1; i < arr.length - 1; i++) {
        newStr += arr[i];
        newArr.push(newStr);
    }
    return newArr;
};