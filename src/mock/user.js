import {UserAPI} from "@/services/system/user/UserAPI";

export default [
    {
        url: UserAPI.login,
        type: 'post',
        response: () => {
            return {
                code: 200,
                success: true,
                message: '',
                result: {
                    token: '123',
                }
            }
        }
    }
]