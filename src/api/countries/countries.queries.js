const db = require('../../dbConnection');
const tableNames = require('../../tableNames');

module.exports = {
  find() {
    return db(tableNames.country).select('id', 'name');
  },
  get() {
    return db(tableNames.country).max('name');
  },
};
