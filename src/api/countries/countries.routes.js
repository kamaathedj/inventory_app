const route = require('express').Router();

const query = require('./countries.queries');

route.get('/', async (req, res) => {
  const countries = await query.find();
  res.json(countries);
});


module.exports = route;
