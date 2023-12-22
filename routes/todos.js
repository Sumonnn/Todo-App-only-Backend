const express = require('express');
const router = express.Router();

//import controller
const { createTodo } = require('../controllers/createTodo.js');
const { getTodo } = require('../controllers/getTodo.js');
const { getTodoById } = require('../controllers/getTodoById.js');
const { updateTodo } = require('../controllers/updateTodo.js');
const { deleteTodo } = require('../controllers/deleteTodo.js');


//define API routes
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodo);
router.get('/getTodos/:id', getTodoById);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);

module.exports = router;