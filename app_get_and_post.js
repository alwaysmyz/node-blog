const http = require('http')
const server = http.createServer((req, res) => {
    const { url, method } = req
    const [ path, query ] = url.split('?')
    //设置了返回格式为 JSON
    res.setHeader('Content-Type', 'application/json') //response为html的时候 content-type为 text/html
    //构造 要返回的数据
    let resData = {
        url,
        method,
        path,
        query,
    }
    //返回
    if (method === 'GET') {
        console.log('get 方法')
        res.end(JSON.stringify(resData))
    }
    let postData=''
    if (method === 'POST') {
        console.log('post 方法')
        req.on('data', (data) => {
            postData+=data.toString()
            // postData+=data
        })
        req.on('end', () => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }
})
server.listen(3000, () => {
    console.log('listening on port:3000')
})