const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const Lists = new Schema({
    title : { type : String , required : true },
    IDBoard : { type : String , required : true }
},)


module.exports = mongoose.model('lists',Lists);