import {Api} from "@/services/system/permission/menuApi";

export default [
    {
        url: Api.getMenuList,
        type: 'post',
        response: () => {
            return {
                code: 200,
                success: true,
                message: '',
                result: [
                    {
                        "path": "/home",
                        "component": "Home",
                        "route": "1",
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "HomeOutlined",
                            "componentName": "Menu",
                            "title": "首页"
                        },
                        "name": "system-menu",
                        "id": "1170592628746878978"
                    },
                    {
                        "redirect": null,
                        "path": "/system",
                        "component": "",
                        "route": "1",
                        "children": [{
                            "path": "/system/menu",
                            "component": "system/Menu",
                            "route": "1",
                            "meta": {
                                "keepAlive": false,
                                "internalOrExternal": false,
                                "icon": "SettingOutlined",
                                "componentName": "Menu",
                                "title": "菜单管理"
                            },
                            "name": "system-menu",
                            "id": "1170592628746878978"
                        }, {
                            "path": "/system/role",
                            "component": "system/Role",
                            "route": "1",
                            "meta": {
                                "keepAlive": false,
                                "internalOrExternal": false,
                                "icon": "SettingOutlined",
                                "componentName": "Role",
                                "title": "角色管理"
                            },
                            "name": "system-role",
                            "id": "190c2b43bec6a5f7a4194a85db67d96a"
                        }, {
                            "path": "/system/user",
                            "component": "system/User",
                            "route": "1",
                            "meta": {
                                "keepAlive": true,
                                "internalOrExternal": false,
                                "icon": "UserOutlined",
                                "componentName": "User",
                                "title": "用户管理"
                            },
                            "name": "system-user",
                            "id": "3f915b2769fc80648e92d04e84ca059d"
                        }],
                        "meta": {
                            "keepAlive": false,
                            "internalOrExternal": false,
                            "icon": "SettingOutlined",
                            "title": "系统管理"
                        },
                        "name": "system",
                        "id": "d7d6e2e4e2934f2c9385a623fd98c6f3"
                    }
                ]
            }
        }
    }
]