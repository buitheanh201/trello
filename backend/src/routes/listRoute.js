const route = require('express').Router();
const ListController = require('./../app/controllers/Lists');

route.get('/:idboard',ListController.findAll);
route.post('/',ListController.create);
route.put('/:id',ListController.update);
route.delete('/:id',ListController.delete);



module.exports = route;