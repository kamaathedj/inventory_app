/* eslint-disable no-unused-vars */
const Knex = require('knex');

const tableNames = require('../../src/tableNames');

const {
  addDefaultColumns,
  references,
  email,
  baseEmail,
  url,
} = require('../../src/lib/db_utils');

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.size, (table) => {
    table.increments();
    table.float('volume').notNullable();
    table.float('width');
    table.float('height');
    table.float('length');
  });

  await knex.schema.createTable(tableNames.country, (table) => {
    table.increments();
    table.string('name', 254).notNullable();
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.county, (table) => {
    table.increments();
    table.string('name', 254).notNullable();
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.address, (table) => {
    table.increments();
    table.string('name', 254).notNullable();
    table.string('city', 254);
    table.string('street_address', 50).notNullable();
    table.string('street_address_2', 50);
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.string('zipcode', 15).notNullable();
    references(table, tableNames.county);
    references(table, tableNames.country);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.manufacturer, (table) => {
    table.increments();
    table.string('name', 254).notNullable().defaultTo('unknown manufacturer');
    table.string('logoUrl', 254);
    table.text('description');
    table.string('type');
    baseEmail(table);
    references(table, tableNames.address);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.item_type, (table) => {
    table.increments();
    table.string('item_type', 70).notNullable().defaultTo('type unknown');
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.item, (table) => {
    table.increments();
    table.string('product_name', 254).notNullable();
    table.text('description', 1000);
    table.boolean('sparks_joy').defaultTo(true);
    table.string('sku', 42);
    references(table, tableNames.user);
    references(table, tableNames.size);
    references(table, tableNames.manufacturer);
    references(table, tableNames.item_type);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.item_location, (table) => {
    table.increments();
    table.string('where_at', 254).notNullable();
  });

  await knex.schema.createTable(tableNames.item_info, (table) => {
    table.increments();
    references(table, tableNames.user);
    references(table, tableNames.item);
    table.dateTime('purchase_date').notNullable();
    table.dateTime('expiration_date').notNullable();
    table.dateTime('last_used');
    table.float('price').notNullable().defaultTo(0);
    table.float('RRP_price');
    references(table, tableNames.item_location);
    references(table, tableNames.purchase_location);
    addDefaultColumns(table);
  });

  await knex.schema.createTable(tableNames.item_image, (table) => {
    table.increments();
    references(table, tableNames.item);
    url(table, 'image_url');
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  await Promise.all([
    tableNames.item_image,
    tableNames.item_info,
    tableNames.item_location,
    tableNames.item,
    tableNames.size,
    tableNames.manufacturer,
    tableNames.item_type,
    tableNames.address,
    tableNames.country,
    tableNames.county,
  ].map((table) => knex.schema.dropTableIfExists(table)));
};
