const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Member = new Schema({
    IDAccount : { type : String },
    permission : { type : String }
},{
    timestamps : true
})

const Board = new Schema({
    title : { type : String },
    background : { type : String },
    status : { type : String , default : 'private'}
}, {
    timestamps : true
});

const Teams = new Schema({
    IDAccount : { type : String , required : true },
    name : { type : String , maxlength : 50 ,required : true},
    description : { type : String , maxlength : 255},
    teamType : { type : String , required : true },
    status : { type : Boolean , default : true},
    avatar : { type : String ,default : ''},
    members : [Member],
    boards : [Board]
},{
    timestamps : true
});

module.exports = mongoose.model('teams',Teams);