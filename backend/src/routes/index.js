const authRoute = require('./authRoute');
const groupRoute = require('./groupRoute');
const listRoute = require('./listRoute');
const cardRoute = require('./cardRoute');
const app = (app) => {
    app.use('/auth',authRoute); 
    app.use('/group',groupRoute);
    app.use('/list',listRoute);
    app.use('/card',cardRoute);
}


module.exports = app;