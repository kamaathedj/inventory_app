const route = require('express').Router();

route.get('/', (req, res) => {
  res.json([]);
});


module.exports = route;
