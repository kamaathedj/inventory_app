const { Model } = require('objection');
const tableNames = require('../../tableNames');


class User extends Model {
  static get tableName() {
    return tableNames.user;
  }
}

module.exports = User;
