const { Schema, model } = require('mongoose');

const thoughtsData = new Schema(
    {
        thoughtContent:{
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        userName:{
            type: String,
            required: true,
        }
    }
)

const Thoughts = model('Thoughts', thoughtsData);

module.exports = Thoughts;