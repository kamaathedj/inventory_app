const route = require('express').Router();

const queries = require('./item_type.queries');


route.get('/', async (req, res) => {
  const itemType = await queries.find();
  res.json(itemType);
});

module.exports = route;
