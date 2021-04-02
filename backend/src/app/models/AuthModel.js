const mongoose = require('mongoose');
const { Schema } = mongoose;

const Notification = new Schema({
    title : { type : String},
    content : { type : String},
    status : { type : Boolean},
    sendBy : { type : String }
},{
    timestamps :  true
})

const Users = new Schema({
    username : String,
    email : String,
    password : String,
    avatar : String,
    notification : [Notification]
},{
    timestamps  : true
})


module.exports = mongoose.model('Users',Users); 


