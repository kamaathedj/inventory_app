const router = require('express').Router();
const model = require('../models/todo');

router.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'welcome to todo api',

  });
});

router.get('/todos', (req, res, next) => {
  model.getTodos(req, res, next);
});

router.get('/todo/:id', (req, res, next) => {
  model.getSpecificTodo(req, res, next);
});

router.post('/todo', (req, res, next) => {
  model.addTodo(req, res, next);
});

router.all('/todo/patch/:id', (req, res, next) => {
  model.patchTodo(req, res, next);
});

router.all('/todo/delete/:id', (req, res, next) => {
  model.deleteTodo(req, res, next);
});

module.exports = router;
