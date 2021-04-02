const route = require('express').Router();
const authController = require('./../app/controllers/Authentication');

//restful api

//route level 2 

route.get('/:id/notification/:idNotification',authController.findOneNotification);

route.get('/:id/notification',authController.findAllNotification);

route.post('/:id/notification',authController.createNotification);

route.put('/:id/notification',authController.updateNotification);

//route level 1
route.get('/',authController.findAll);

route.get('/:id',authController.findOne);

route.post('/',authController.create);

route.post('/login',authController.authLogin);

route.put('/:id',authController.update);

route.delete('/:id',authController.delete);

module.exports = route;