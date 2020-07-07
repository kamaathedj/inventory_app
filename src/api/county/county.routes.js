const route = require('express').Router();
const query = require('./county.queries');

route.get('/', async (req, res) => {
  const data = await query.find();
  res.json(data);
});


module.exports = route;
