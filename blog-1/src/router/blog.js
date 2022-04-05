const { SuccessModel, ErrorModel } = require('../model/resModel')
const {getList}=require('../controller/blog')
const handleBlogRouter = (req, res) => {
    const method = req.method;
    const path = req.path
    //获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const { auth='', keyword='' } = req.query
        const dataList=getList(auth, keyword)
        return new SuccessModel(dataList)
    }
    //获取博客详情
    if (method === 'GET'&&path==='/api/blog/detail') {
        return { 
            msg: '这是获取博客详情的接口'
        }
    }
    //新建一篇博客
    if (method === 'POST'&&path==='/api/blog/new') {
        return { 
            msg: '这是获取博客列表的接口'
        }
    }
    //更新一篇博客
    if (method === 'POST'&&path==='/api/blog/update') {
        return { 
            msg: '这是获取博客列表的接口'
        }
    }
    //删除一篇博客
    if (method === 'POST'&&path==='/api/blog/del') {
        return { 
            msg: '这是获取博客列表的接口'
        }
    }
}
module.exports = handleBlogRouter