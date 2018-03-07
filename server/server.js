/**
 * Created by zhoupengkai on 2018/3/7.
 */

var {mongoose} = require('./database/mongoose');

var {Todo} = require('./models/todoModel');

var {User} = require('./models/userModel');

var express = require('express');

var bodyParser = require('body-parser');


var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

    console.log(req.body);
    var reqData =  req.body;
    var todo = new Todo({
        text: reqData.text,
        completed:reqData.completed,
        completeAt:reqData.completeAt
    });

    todo.save().then((result)=>{
        res.status(200).send(result);
    })

});

app.listen(port,()=>{
    console.log('starting node server port 3000');
})
