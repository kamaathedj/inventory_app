const router = require('express').Router();

const countryRoutes = require('./countries/countries.routes');


router.use('/countries', countryRoutes);

module.exports = router;
