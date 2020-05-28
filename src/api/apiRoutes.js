const router = require('express').Router();

const countryRoutes = require('./countries/countries.routes');


router.get('/countries', countryRoutes);

module.exports = router;
