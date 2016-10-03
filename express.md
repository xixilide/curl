# express的知识
### node.js
React 是一一个前端框架
Express 是后台框架
API（Application Programming Interface,应用程序编程接口）

[express网站](https://expressjs.com/)

### 安装express
npm install --save express

### HTTP请求
HTTP 请求 = Verb + Path
HTTP 请求 = get/post/... + /about

#### 导入express包
var express = require('express')
var app = express();

```js
var express = require('express')
//相当于import
app.get('/',function (req,res) {
  res.send('hello express')
  //res.send() 反馈给前台，网页的信息
})
//代码用来接收请求
app.get('/xx',function (req,res){
  res.send('hello xiaoyan')
  console.log('node');
  //node 环境下是在后台打印的
})
//监听端口
app.listen(3000)
```
http小知识：get/post请求（常用的）

### 返回html页面
```js
app.get('/',function (req,res) {
  var page="<html>"+
          "<body>"+
            "<h1>index.html</h1>"+
            "</body>"+
            "</html>"
            res.send(page)

})
```
 参数(parameter)作为path来传入后台，这样，可以实现前台传参

 ```js
 app.get('/:name',function (req,res) {
   var username = req.params.name
   var page = "<html>"+
             "<body>"+
               "<h1>"+
               username+"的购物车"+
               "</h1>"+
               "</body>"+
             "</html>"
  res.send(page)
 })
 ```
### curl 模拟请求
  在后台写curl命令：
```
curl --request GET localhost:3000/xiaoyan
```
（如何通过表单提交来获取数据？课下查资料）
