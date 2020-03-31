const { Pool } = require('pg');

const pool = new Pool({
  User: 'kamaa',
  host: 'localhost',
  database: 'todo_db',
  password: 'DAka31..',
  port: 5432,
});
const addTodo = (request, response, next) => {
  const { title, description, isCompleted } = request.body;
  const qs = 'INSERT INTO todos (title,description,isCompleted) VALUES($1,$2,$3)';
  pool.query(qs, [title, description, isCompleted], (error, results) => {
    if (error) {
      next(error);
    }
    response.status(201).send(`todo added with id :${results.rows}`);
  });
};

const getTodos = (request, response, next) => {
  const qs = 'SELECT * FROM todos';
  pool.query(qs, (error, results) => {
    if (error) {
      next(error);
    }
    response.status(200).json(results.rows);
  });
};

const getSpecificTodo = (request, response, next) => {
 
  const id = parseInt(request.params.id, 10);
  const qs = 'SELECT * FROM todos WHERE id = $1';
  pool.query(qs, [id], (error, results) => {
    if (error) {
      next(error);
    } else if (results.rows.length === 0) {
      const errors = new Error('No todo with that id');
      next(errors);
    } else {
      response.json(results.rows).status(200);
    }
  });
};

const patchTodo = (request, response, next) => {
  const id = parseInt(request.params.id, 10);
  const { title, description, isCompleted } = request.body;

  const qs = 'UPDATE todos SET title = $1, description = $2, isCompleted = $3 WHERE id = $4';

  // eslint-disable-next-line no-unused-vars
  pool.query(qs, [title, description, isCompleted, id], (error, results) => {
    if (error) {
      next(error);
    }
    response.status(200).send(`Todo modified with ID : ${id}`);
  });
};

const deleteTodo = (request, response, next) => {
  const id = parseInt(request.params.id, 10);
  const qs = 'DELETE FROM todos WHERE id = $1';
  // eslint-disable-next-line no-unused-vars
  pool.query(qs, [id], (error, results) => {
    if (error) {
      next(error);
    }
    response.status(200).send(`Todo deleted with ID :${id}`);
  });
};

module.exports = {
  getTodos,
  getSpecificTodo,
  addTodo,
  patchTodo,
  deleteTodo,
};
