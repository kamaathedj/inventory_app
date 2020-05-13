const bcrypt = require('bcrypt');
const tableNames = require('../../src/tableNames');

const { countries, itemType } = require('../../src/lib/data');


exports.seed = async (knex) => {
  [
    tableNames.item_image,
    tableNames.item_info,
    tableNames.item_location,
    tableNames.item,
    tableNames.size,
    tableNames.manufacturer,
    tableNames.item_type,
    tableNames.address,
    tableNames.purchase_location,
    tableNames.country,
    tableNames.county,
    tableNames.user]
    .map(async (table) => {
      // eslint-disable-next-line no-console
      console.log(`eliminating ${table}`);
      await knex(table).del();
    });

  const createdUser = await knex(tableNames.user).insert([
    {
      email: 'kamaudavikiruku@gmail.com',
      name: 'david kamau',
      password: await bcrypt.hash('DAka31..', 12),
    },
    {
      email: 'admin@gmail.com',
      name: 'administrator',
      password: await bcrypt.hash('admin1234', 12),
    },

  ]).returning('*');

  // eslint-disable-next-line no-console
  console.log(createdUser);

  const created = await knex(tableNames.item_type).insert(itemType).returning('*');
  // eslint-disable-next-line no-console
  console.log(created);

  await knex(tableNames.country).insert(countries);
};
