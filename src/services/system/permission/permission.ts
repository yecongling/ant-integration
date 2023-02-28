import {defHttp} from "@/utils/http";
import {Api} from "@/services/system/permission/menuApi";
import {getMenuListResultModel} from "@/services/system/model/menuModel";

/**
 * 获取菜单列表
 */
export const getMenuList = () => {
    return defHttp.post<getMenuListResultModel>({url: Api.getMenuList})
}