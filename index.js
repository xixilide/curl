var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Post = require('./models/post');
mongoose.connect('mongodb://localhost:27017/posts');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


var db = mongoose.connection;
  db.on('error', console.log);
  db.once('open', function() {
     console.log('success!')
   })

app.get('/', function(req, res) {
       var page = "<form method='post' action='/posts'>" +
                  "<input type='text' name='title' />" +
                  "<input type='submit' />"
              res.send(page)
        });

app.get('/posts', function(req, res) {
    Post.find().sort({'_id':1}).exec(function(err,posts){
      res.send(posts)
    })

                });

app.post('/posts/',function (req,res) {
  var post = new Post({title: req.body.title});
  post.save(function(err){
    if(err) console.log(err);
    console.log("i'm saved");
  })
  res.redirect('/posts')
})

app.listen(3000,function(){
  console.log('runing on port 3000');
})
