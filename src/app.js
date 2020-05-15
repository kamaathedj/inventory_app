const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const middleware = require('./middlewares');
const routes = require('./api/logs');

const app = express();

app.use(morgan('common'));
app.use(helmet());

app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Home inventory api',
  });
});

app.use('/api', routes);


// this should be the last route its is a not found page
app.use(middleware.notFound);

// error handling route
app.use(middleware.errorHandler);
module.exports = app;
