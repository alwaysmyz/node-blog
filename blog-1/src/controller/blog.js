const getList = (author,keyword) => {
    //先返回（格式正确）假数据
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 123213871279,
            author:'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 123213871279,
            author:'zhangsan'
        }
    ]
}
const getDetail = (id) => {
    //先返回假数据
}
module.exports = {
    getList
}