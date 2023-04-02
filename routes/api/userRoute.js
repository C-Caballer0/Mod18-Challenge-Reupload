const router = require('express').Router();
const userController = require('../../controllers/userController');

const  { newUser, editUser, deleteUser, getUsers, getOneUser, addFriend, removeFriend } = userController();

router.route('/userID')
.get(getOneUser)
.put(editUser)
.delete(deleteUser);

module.exports = router;