const router = require('express').Router();
const addressModel = require('./address.model');

router.get('/', async (req, res, next) => {
  try {
    const addresses = await addressModel
      .query()
      .where('deleted_at', null)
      .select('street_address', 'city', 'zipcode');
    res.json(addresses);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const response = await addressModel.query().insert(req.body);
    res.status(201);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
