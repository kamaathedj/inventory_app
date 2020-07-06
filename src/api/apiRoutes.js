const router = require('express').Router();

const countryRoutes = require('./countries/countries.routes');
const itemTypeRoutes = require('./item_type/item_type.routes');


router.use('/countries', countryRoutes);

router.use('/item_type', itemTypeRoutes);

module.exports = router;
