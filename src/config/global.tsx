export interface Config {
    COLLAPSE: boolean,
    TOKEN_KEY: string;
    LOGIN_LIMIT_KEY: string;
    ADMIN_NAME: string;
    LOGIN_LIMIT_TIME: number;
    HOME_ROUTER_PATH: string;
    HOME_NAME: string;
    DEFAULT_PAGE_SIZE: number;
    DEFAULT_CURRENT_PAGE: number
}

const AdminConfig: Config = {
    COLLAPSE: false,
    TOKEN_KEY: 'TOKEN_KEY',
    LOGIN_LIMIT_KEY: 'LOGIN_LIMIT_KEY',
    ADMIN_NAME: 'integration',
    LOGIN_LIMIT_TIME: 10 * 60 * 60 * 1000,
    HOME_ROUTER_PATH: '/home',
    HOME_NAME: '首页',
    DEFAULT_PAGE_SIZE: 20, // 默认条数
    DEFAULT_CURRENT_PAGE: 1 // 默认当前页
}

export default AdminConfig