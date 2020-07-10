/* eslint-disable no-unused-vars */
const router = require('express').Router();


router.post('/signin', (req, res, next) => {
  res.json({
    message: 'we are signing in',
  });
});

router.post('/signup', (req, res, next) => {
  res.json({
    message: 'we are signing up',
  });
});


module.exports = router;
