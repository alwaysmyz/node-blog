const http = require('http')
const server = http.createServer((req, res) => {
    console.log('method:', req.method,req.method === 'POST')
    if (req.method === 'POST') {
        //req 数据格式
        console.log('req content-type', req.headers['content-type'])
        //接收数据
        let postData=''
        req.on('data', (data) => {
            //data本身是二进制 需要toString转化
            postData += data.toString()
        })
        req.on('end', () => {
            console.log('postData', postData)
            res.end('hello world')
        })
    }
})
server.listen(3000, () => {
    console.log('listening on port:3000')
})