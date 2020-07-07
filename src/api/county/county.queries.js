const db = require('../../dbConnection');
const tableNames = require('../../tableNames');

module.exports = {
  find() {
    return db(tableNames.county);
  },
};
