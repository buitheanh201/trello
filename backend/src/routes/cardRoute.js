const route = require('express').Router();
const CardController = require('./../app/controllers/Cards');

//restful api

//for comment

route.get('/:id/comment',CardController.findAllComment);
route.post('/:id/comment/',CardController.createComment);
route.put('/:id/comment/:id',CardController.updateComment);
route.delete('/:id/comment/:id',CardController.deleteComment);

//for card
route.get('/:idlist',CardController.findAll);
route.post('/',CardController.create);
route.put('/:id',CardController.update);
route.delete('/:id',CardController.delete);


module.exports = route;