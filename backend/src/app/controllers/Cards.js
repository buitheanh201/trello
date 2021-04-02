const CardModel = require('./../models/CardModel');

class Card {

    findAll(req,res){
        CardModel.find({ IDList : req.params.idlist})
                    .then(data => res.json(data))
                    .catch(error => res.json({message : error}));
    }
    create(req,res){
        const newCard = new CardModel({
            title : req.body.title,
            IDList : req.body.IDList
        })
        newCard.save()
                    .then(data => res.json(data))
                    .catch(error => res.json({message : error}));
    }
    update(req,res){
        CardModel.updateOne({ _id : req.params.id },{
            title : req.body.title,
            description : req.body.description,
            dealine : req.body.dealine
        })
            .then(data => res.status(200).json({update : 'successfully !'}))
            .catch(err => res.json({message : 'update false !'}));
    }
    delete(req,res){
        
    }

    findAllComment(req,res){

    }
    
    createComment(req,res){

    }

    updateComment(req,res){

    }
    deleteComment(req,res){

    }
}



module.exports = new Card;