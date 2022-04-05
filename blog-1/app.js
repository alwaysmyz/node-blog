const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const queryString= require('querystring')
const serverHandler = (req, res) => {
    //设置返回格式 JSON
    console.log('req.url',req.url,req.method)
    res.setHeader('Content-Type', 'application/json')
    //获取path 
    const url = req.url
    req.path = url.split('?')[0]
    
    //解析 query
    req.query=queryString.parse(url.split('?')[1])
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        res.end(JSON.stringify(blogData))
        return
    }
    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(JSON.stringify(userData))
        return
    }
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('404 Not Found\n')
    res.end()
}
module.exports =serverHandler