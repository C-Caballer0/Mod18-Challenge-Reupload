const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

const  { newThought, editThought, deleteThought, getThoughts, getOneThought } = thoughtController();

router.route('/').get(getUser).post(createUser);

router.route('/thoughtID')
.get(getOneThought)
.put(editThought)
.delete(deleteThought);

module.exports = router;