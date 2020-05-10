
function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.datetime('deleted_at');
}

function references(table, tableName) {
  table.integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

function email(table) {
  table.string('email', 254).notNullable().unique();
}

const baseEmail = (table) => table.string('email', 254);

function url(table, tableName) {
  table.string(tableName, 2000);
}

module.exports = {
  addDefaultColumns,
  references,
  email,
  baseEmail,
  url,
};
