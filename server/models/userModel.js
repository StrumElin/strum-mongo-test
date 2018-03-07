
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{
        required:true,
        type:String,
        trim:true,
        minlength:1
    },
    name:String
})

/*
var User = mongoose.model('User',{
    email:{
        required:true,
        type:String,
        trim:true,
        minlength:1
    }
});
*/

var User = mongoose.model('User',userSchema);

module.exports = {User};
