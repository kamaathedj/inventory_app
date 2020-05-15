
require('dotenv').config();
const app = require('./app');

const port = process.env.port || 3000;





app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
