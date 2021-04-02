const route = require('express').Router();
const GroupController = require('../app/controllers/Groups');

//restful api

//route level 2 
route.get('/board/:id',GroupController.findOneBoard)
route.post('/board',GroupController.createBoard);

//route level 1 

route.get('/:id',GroupController.findAll);

route.get('/:id/:idgroup',GroupController.findOne);

route.post('/:id',GroupController.create);

route.put('/:id/:idgroup',GroupController.update);

route.delete(':id/:idgroup',GroupController.delete);


module.exports = route;