/**
 * Created by zhoupengkai on 2018/3/7.
 */

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Strum0307',{useMongoClient:true});

module.exports = {mongoose}