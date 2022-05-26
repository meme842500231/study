const { request } = require('express')
const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.static(__dirname+'/src'))
app.use(express.json())
app.get('/test_get', (requst, response) => {
    response.send('hello,杨玉玲!董正阳!')
})
app.post('/test_post', (requst, response) => {
    console.log('有人请求了',request.body)
    response.send('hello,杨玉玲! post')
})
app.listen(8090, (err) => {
    if (!err) {
        console.log('测试请求成功了,测试如下')
        console.log('http://127.0.0.1:8090/ajax.html')
    }
}) 