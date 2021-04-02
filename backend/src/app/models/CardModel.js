const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const comments = new Schema({
    IDAccount : { type : String },
    content : String
},{
    timestamps : true
});

const files = new Schema({
    fileName : String ,
    fileExtension : String
},
{
    timestamps : true
}
);

const Cards = new Schema({
    title : { type : String ,required : true},
    description : { type : String , default : ''},
    members : [],
    comments : [comments],
    dealine : { type : String , default : ''},
    files : [files],
    IDList : { type : String , required : true}
});

module.exports = mongoose.model('Cards',Cards);