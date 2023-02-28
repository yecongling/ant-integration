export default [
    {
        url: '/api/user/login',
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