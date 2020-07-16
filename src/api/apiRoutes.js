const router = require('express').Router();

const countryRoutes = require('./countries/countries.routes');
const itemTypeRoutes = require('./item_type/item_type.routes');
const countyRoutes = require('./county/county.routes');
const userRoute = require('./user/user.routes');
const auth = require('./auth/auth.routes');
const address = require('./address/address.routes');


router.use('/countries', countryRoutes);

router.use('/item_type', itemTypeRoutes);

router.use('/county', countyRoutes);

router.use('/user', userRoute);

router.use('/auth', auth);

router.use('/address', address);

module.exports = router;
