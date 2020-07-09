const route = require('express').Router();
const model = require('./user.model');

route.get('/', async (req, res) => {
  const users = await model
    .query()
    .select('id', 'name', 'email');
  res.json(users);
});


module.exports = route;
