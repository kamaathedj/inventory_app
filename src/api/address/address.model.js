const { Model } = require('objection');
const tableNames = require('../../tableNames');
const schema = require('./adddress.schema.json');

class Address extends Model {
  static get tableName() {
    return tableNames.address;
  }

  static get jsonSchema() {
    return schema;
  }
}
module.exports = Address;
