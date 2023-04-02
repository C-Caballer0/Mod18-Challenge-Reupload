const { Thought, Thought } = require("../models");

module.exports = { 

newThought(req, res) {
    Thought.create(req.body)
        .then(({ _id}) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
}).then((thought) => res.json(thought));
},

editThought(req, res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtID},
        {$set: req.body},
    ).then((thought) => res.json(thought));
},    

deleteThought(req, res) {
    Thought.findOneAndDelete({_id: req.params.thoughtID})
    .then((thought) => res.json(thought));
},

getThoughts(req, res) {
    Thought.find({})
        .then((thought) => res.json(thought));
},

getOneThought(req, res) {
    Thought.findOne({_id: req.params.thoughtID})
    .then(( thought) => res.json(thought));
},

};
