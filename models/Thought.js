const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
},
    reactionBody: {
        type: String,
        required: 'Need to get a feel on how you feel dawg',
        maxlength: 280
},
    username: {
        type: String,
        required: 'You must add your username'
},
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
}
},
{
    toJSON: {
        getters: true
    }
});
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'You gotta let us know what is on your mind',
        trim: true,
        minlength: 1,
        maxlength: 280

    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: "We need to know who's thoughts these are!"
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
