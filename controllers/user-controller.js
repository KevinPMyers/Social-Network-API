const { User } = require('../models');

const userController = {
// get all users
getAllUsers(req, res) {
    User.find({})
    .populate({
        path: 'thoughts',
        
    })
    
    .sort({ _id: -1})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
},

// get user by ID
getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
        path: 'users',
        
    })
    
    .then(dbUserData => {
        // if no user found, send 404
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
},

// create User
createUser({ body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(500).json(err));
},

// update user by Id
updateUser({ params, body }, res) {
    User.findOneAndUpdate(
        { _id: params.id }, 
        body, 
        { new: true }
        )
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this ID' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(500).json(err));
},

// delete User
deleteUser({ params}, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(500).json(err));
},

addFriend({ params }, res) {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId }},
        { new: true }
    )
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.status(500).json(err));
},

removeFriend({ params }, res) {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: {friends: params.friendId }},
        {new: true }
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(500).json(err));
}

};

module.exports = userController;