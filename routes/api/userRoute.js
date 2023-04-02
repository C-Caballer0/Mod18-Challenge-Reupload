const router = require('express').Router();
const userController = require('../../controllers/userController');

const  { newUser, editUser, deleteUser, getUsers, getOneUser } = userController;

router.route('/').get(getUsers).post(newUser);

router.route('/userID')
.get(getOneUser)
.put(editUser)
.delete(deleteUser);

module.exports = router;