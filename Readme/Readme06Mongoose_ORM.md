

1:Mongoose : an ORM standing for object relational mapping , make easy to struct you data

Mongoose save data as a model[模型] to database

http://mongoosejs.com

例子:
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');
    const Cat = mongoose.model('Cat', { name: String });
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));

安装  npm i mongoose@4 --save








