const { Schema, model} = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: 'Must provide Username',
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: 'Must provide a valid email address',
        unique: true,
        validate: [validateEmail, 'Please fill out your email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.Object,
            ref: 'User'
        }
    ]
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;

