//写在index.js 中
var mongoose = require('mongoose');
//导入mongoose

mongoose.connect('mongodb://localhost:27017/persons');
//mongodb协议链接，连接数据库 persons为连接的数据库

var db = mongoose.connection;
//获得这个连接，存放到db中
// db.on('error', console.error.bind(console, 'connection error:'));
var PersonSchema = mongoose.Schema({
    name: String,
    password:String,
    age:String
    //描述数据类型
});
db.once('open', function() {
  console.log("success");
});
var Persons = mongoose.model('Persons',PersonSchema);

var user = new Persons({
  name:"xixilide",
  password:123,
  age:20
});
user.save();

console.log(user);

Persons.find().exec(function(err,Persons){
  // console.log(Persons);
})

// personSchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

Persons.findById({_id: '57ec8894e195c50dadbb996a'}, function(err, user) {
  user.name = 'new'
  user.save(function(err){
    console.log('更新了！')
    Persons.find().exec(function(err, users) {
      // 异步执行
      console.log(users);
    });
  });
console.log("我先出来了")
})
Persons.findById({_id: '57ec8894e195c50dadbb996a'}, function(err, user) {
  user.name = 'new'
  user.remove(function(err){
    console.log('删除了')
    Persons.find().exec(function(err, users) {
      // 异步执行
      console.log(users);
    });
  });
})
