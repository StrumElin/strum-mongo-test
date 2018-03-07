
deprecatingly:['deprikeitiŋli] 不赞成

1:Mongoose : an ORM standing for object relational mapping , make easy to struct you data

Mongoose save data as a model[模型] to database

http://mongoosejs.com

http://mongoosejs.com/docs/guide.html 文档

例子:
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');
    const Cat = mongoose.model('Cat', { name: String });
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));

安装  npm i mongoose@4 --save

创建server.js

1:
var mongoose = require('mongoose');

2:
使用mongoose的promise
mongoose.Promise = global.Promise;

3:
mongoose.connect('mongodb://xxxxx/XX');
//为什么不要连接回调 :  因为 mongoose maintaining [维持] this connection over time . 没有连接上 下面的代码是不会执行的

4:创建一个 model 模型

var Todo 的名字 必须与 model里的名字一样
var Todo = mongoose.model('Todo',{

    name:{
        type:String
    },

    completed:{
        type:Boolean
    },

    completedAt:{
        type:Number
    }
})

5:创建模型实例,添加数据  实例 调用 save方法 将模型实例数据传入到数据库

    const Todo = new Todo({name:'strum',completed:true,completedAt:1});

    Todo.save().then((res)=> console.log(res))


6: validators[验证器]  types  defaults

注意: type

  在model验证

  0:type : 如果 type 是 string 如果传入23 会自动转换成 23  如果传入 true 会转化成 字符串 'true'

  1:required:  required: true   required:[true,'why not ']

  2:min/max :  min:[6,'Too few eggs'];
    minlength: 1  防止''

  3:unique:   unique:true

  4: trim:  去空格 "  xx  " => "xx"

  5: default: 默认的值

  5:自定义 validators: 电话号码

  validate: {
            validator: function(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
          },



  7:postman : let you create HTTP Request and fire them off and see how things work as you move throught you API

  https://www.getpostman.com

 下载 postman

 create our first requesr and we will be firing off a post man request to hit the url you are create











