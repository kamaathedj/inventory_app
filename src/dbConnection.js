const knex = require('knex');
const knexConfig = require('../knexfile');

const konex = knex.config(knexConfig);

module.exports = konex;
