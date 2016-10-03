var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/post',function (req,res) {

  console.log('GET/posts');
})
//读取所有文章

app.get('/',function (req,res) {
var page = "<form method='post' action='/post'>"+
              "<input type='text' name='title'/>"+
              "<input type='submit'/>"+
            "</form>"

  res.send(page);
  // console.log('GET/posts/：post_id');
})
//读取一篇文章
app.put('/post/:id',function (req,res) {

  console.log('update');
})
//更新一篇文章
app.post('/post/',function (req,res) {
res.send("the blog title is: "+req.body.title)
 console.log('creat');
})

//新建一篇文章，页面需要有表单提交
 app.delete('/post/:id',function (req,res) {

   console.log('delete');
 })

//删除一篇文章
app.listen(3000,function(){
  console.log('runing on port 3000');
})
