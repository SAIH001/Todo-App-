const express = require('express');
const router = express.Router();

const { 
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/TodoController');


router.route('/').get(getTodo).post(createTodo);


router.route('/:id').put(updateTodo).delete(deleteTodo);



module.exports = router;