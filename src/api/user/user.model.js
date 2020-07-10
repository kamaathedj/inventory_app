const { Model } = require('objection');
const tableNames = require('../../tableNames');


class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  // TODO: handle json schema
  static get jsonSchema() {
    return 1;
  }

  static get ManyToManyRelation() {
    return 2;
  }
}

module.exports = User;
