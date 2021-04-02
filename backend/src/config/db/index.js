const mongoose = require('mongoose');

const connect = () => mongoose.connect('mongodb://localhost:27017/zollo',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

module.exports = { connect }