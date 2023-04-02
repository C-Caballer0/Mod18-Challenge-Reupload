const { User, Thought } = require("../models");

module.exports = { 

newUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user));
},

editUser(req, res) {
    User.findByIdAndUpdate(
        {_id: req.params.userID},
        {$set: req.body},
    ).then((user) => res.json(user));
},    

deleteUser(req, res) {
    User.findOneAndDelete({_id: req.params.userID})
    .then(() => res.json("Deleted"));
},

getUsers(req, res) {
    User.find({})
        .then((user) => res.json(user));
},

getOneUser(req, res) {
    User.findOne({_id: req.params.userID})
    .then((user) => res.json(user));
},

};