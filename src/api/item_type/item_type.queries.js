const db = require('../../dbConnection');
const tableNames = require('../../tableNames');

module.exports = {
  find() {
    return db(tableNames.item_type).select('id', 'item_type');
  },
};
