const jwt = require('jsonwebtoken');
const UserModel = require('./../models/AuthModel');
class Authentiaction {
     //findAll content 
     findAll(req, res) {
          UserModel.find({})
               .then(data => res.json(data))
               .catch(error => res.json({ error }));
     }
     //findOne content
     findOne(req, res) {
          UserModel.findOne({ _id: req.params.id })
               .then(data => res.json(data))
               .catch(error => res.json({ error }));
     }
     //save content for mongoose db
     create(req, res) {
          const document = new UserModel({
               username: req.body.username,
               password: req.body.password,
               email: req.body.email,
               avatar: req.body.avatar
          });
          document.save()
               .then(data => res.json({ save: 'successfully!' }))
               .catch(error => res.json({ error }));
     }
     //update content 
     update(req, res) {
          UserModel.updateOne({ _id: req.params.id }, {
               avatar: req.body.avatar
          })
               .then(data => res.json({ update: 'successfully !' }))
               .catch(error => res.json({ update: 'error' }));
     }
     delete(req, res) {
          UserModel.deleteOne({ _id: req.params.id })
               .then(data => res.json({ delete: 'successfully !' }))
               .catch(error => res.json({ error }));
     }
     authLogin(req, res) {
          if (req.body.token) {
               try {
                    const tokenClient = jwt.verify(req.body.token, 'buppro9x');
                    UserModel.findOne({ _id: tokenClient.id })
                         .then(data => {
                              res.json(data);
                         })
                         .catch(error => res.json({ error }));
               } catch (error) {
                    res.json({ errorToken : 'token is changed' });
               }
          } else {
               UserModel.findOne({ email: req.body.email, password: req.body.password })
                    .then(data => {
                         if (data) {
                              const token = jwt.sign({ id: data._id }, 'buppro9x');
                              res.json({ token,account : data });
                         } else res.json({ message: 'Thông tin tài khoản hoặc mật khẩu không chính xác...' })
                    })
                    .catch(error => res.json({ message : error }));
          }
     }
     findAllNotification(req, res) {
          UserModel.findOne({ _id: req.params.id })
               .then(data => {
                    res.json(data.notification);
               })
               .catch(error => res.json({ error }));
     }
     findOneNotification(req, res) {
          UserModel.findOne({ _id: req.params.id })
               .then(data => {
                    res.json(data.notification.id(req.params.idNotification));
               })
               .catch(error => res.json({ error }));
     }
     createNotification(req, res) {
          UserModel.findOne({ _id: req.params.id })
               .then(data => {
                    data.notification.push({
                         title: req.body.title,
                         content: req.body.content,
                         status: false,
                         sendBy: req.body.sendBy
                    })
                    data.save().then((data) => res.json(data));
               })
     }
     updateNotification(req, res) {
          UserModel.findOne({ _id: req.params.id })
               .then(data => {
                    data.notification.id(req.body.idNotification).status = true;
                    data.save().then(data => res.json(data));
               })
               .catch(error => res.json({ error : 'Error !' }));
     }
}



module.exports = new Authentiaction;