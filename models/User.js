const { model, Schema , Types } = require('mongoose');

const userData = new Schema(
    {
        username:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
             type: String,
             required: true,
        },
        thoughts: [
            {type: Schema.Types.ObjectId,
            ref: "Thoughts"},
        ],
        friends: [
            {type: Schema.Types.ObjectId,
            ref: "User"},
        ],
    },
);

const User = model('User', userData);
module.exports = User;
