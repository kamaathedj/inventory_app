const router = require('express').Router();

const countryRoutes = require('./countries/countries.routes');
const itemTypeRoutes = require('./item_type/item_type.routes');
const countyRoutes = require('./county/county.routes');


router.use('/countries', countryRoutes);

router.use('/item_type', itemTypeRoutes);

router.use('/county', countyRoutes);

module.exports = router;
