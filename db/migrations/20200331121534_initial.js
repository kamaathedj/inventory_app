
// eslint-disable-next-line no-unused-vars
const Knex = require('knex');

const tableNames = require('../../src/tableNames');

const {
  addDefaultColumns,
  email,
} = require('../../src/lib/db_utils');


/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable();
      email(table);
      table.string('name', 254).notNullable();
      table.string('password', 127).notNullable();
      table.datetime('last_login');
      addDefaultColumns(table);
    }),

    knex.schema.createTable(tableNames.purchase_location, (table) => {
      table.increments();
      table.string('purchase_location', 254).notNullable().unique();
    }),


  ]);
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await Promise.all([
    tableNames.user,
    tableNames.purchase_location,
  ].map((table) => knex.schema.dropTableIfExists(table)));
};
