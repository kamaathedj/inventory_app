const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('./middlewares');
const routes = require('./api/logs');
require('dotenv').config();

const port = process.env.port || 3000;
const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.use('/api', routes);


// this should be the last route its is a not found page
app.use(middleware.notFound);

// error handling route
app.use(middleware.errorHandler);


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
