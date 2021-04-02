const ListModel = require('./../models/ListModel');

class List {
        findAll(req,res){
            ListModel.find({ IDBoard : req.params.idboard})
                        .then(data => res.json(data))
                        .catch(error => res.json(error));
        }
        create(req,res){
            const newList = new ListModel({
                title : req.body.title,
                IDBoard : req.body.IDBoard
            });
            newList.save()
                        .then(data => res.json(data))
                        .catch(error => res.json({message : error}))
        }
        update(req,res){
            ListModel.updateOne({ _id : req.params.id },{
                title : req.body.title
            })
                .then(data => res.json(data))
                .catch(error => res.json({message : error}))
        }
        delete(req,res){
            ListModel.deleteOne({ _id : req.params.id})
                        .then(data => res.json({delete : data}))
                        .catch(error => res.json({message : error}))
        }
}



module.exports = new List;