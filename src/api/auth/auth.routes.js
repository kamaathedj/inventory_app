/* eslint-disable no-unused-vars */
const router = require('express').Router();
const yup = require('yup');
const bcrypt = require('bcrypt');

const userModel = require('../user/user.model');
const jwt = require('../../lib/jwt');


const schema = yup.object().shape({
  name: yup.string().trim().min(2).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(200)
    .matches(/[^A-Za-z0-9]/, 'password must contain a special character ')
    .matches(/[A-Z]/, 'password must contain a capital letter')
    .matches(/[a-z]/, 'password must contain a small letter')
    .matches(/[0-9]/, 'password must contain a number')
    .required(),
});

const errorMessages = {
  invalidLogin: 'invalid login',
  emailInUse: 'email in use',
};

router.post('/signup', async (req, res, next) => {
  const { name, email, password } = req.body;
  const createUser = {
    name, email, password,
  };
  try {
    await schema.validate(createUser, {
      abortEarly: false,
    });

    const existingUser = await userModel.query().where({ email }).first();
    if (existingUser) {
      const error = new Error(errorMessages.emailInUse);
      res.status(403);
      throw error;
    }
    const hashedpassword = await bcrypt.hash(password, 12);

    const insertedUser = await userModel.query().insert({
      name,
      email,
      password: hashedpassword,
    });
    delete insertedUser.password;

    const payload = {
      id: insertedUser.id,
      name,
      email,
    };
    const token = await jwt.sign(payload);
    res.json({
      message: 'ok',
      payload,
      token,
    });
  } catch (error) {
    next(error);
  }
});


router.post('/signin', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    await schema.validate({
      name: 'kamaa',
      email,
      password,
    }, {
      abortEarly: false,
    });

    const User = await userModel.query().where({ email }).first();
    if (!User) {
      const error = new Error(errorMessages.invalidLogin);
      res.status(401);
      throw error;
    }
    const validPassword = await bcrypt.compare(password, User.password);

    if (!validPassword) {
      const error = new Error(errorMessages.invalidLogin);
      res.status(401);
      throw error;
    }

    const payload = {
      id: User.id,
      name: User.name,
      email,
    };
    const token = await jwt.sign(payload);
    res.json({
      message: 'ok',
      payload,
      token,
    });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
