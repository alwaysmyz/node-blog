const handleUserRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = req.path
    //登录
    console.log('1', method === 'POST')
    console.log('2', path === '/api/user/login')
    if (method === 'POST' && path === '/api/user/login') {
        return {
            msg: '这是登录的接口'
        }
    }
}
module.exports = handleUserRouter