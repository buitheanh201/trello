const GroupModel = require('../models/GroupModel');

class Group {
    //route level 1 
    findAll (req,res){
        GroupModel.find({ "members.IDAccount" : req.params.id})
            .then(data => res.json(data))
            .catch(error => res.json({message : error}))
    }
    findOne (req,res){
        GroupModel.findOne({ "members.IDAccount" : req.params.id , _id : req.params.idgroup})
             .then(data => res.json(data))
             .catch(error => res.json({message : error}))
    }
    create(req,res){
        const createNewTeam = new GroupModel({
            IDAccount : req.params.id,
            name : req.body.name,
            description : req.body.description,
            teamType : req.body.teamType,
            status : req.body.status,
            avatar : req.body.avatar,
            members : [{
                IDAccount : req.params.idaccount,
                permission : 1
            }],
            boards : []
        })
        createNewTeam.save()
                      .then(data => res.json(data))
                      .catch(error => res.json({message : error}));
    }
    update(req,res){
        
    }
    delete(req,res){

    }
    createBoard(req,res){
        GroupModel.findOne({ _id : req.body._id})
                    .then(data => {
                        data.boards.push({
                            title : req.body.title,
                            background : req.body.background,
                            status : req.body.status
                        })
                        data.save()
                                .then(data => res.status(200).json(data.boards))
                                .catch(error => res.json({message : error}))
                    })
                    .catch(error => res.json({message : error}));
    }
    findOneBoard(req,res){
        GroupModel.findOne({ "boards._id" : req.params.id})
                    .then(data => res.json(data.boards.id(req.params.id)))
                    .catch(error => res.json({message : error}));
    }
}


module.exports = new Group;