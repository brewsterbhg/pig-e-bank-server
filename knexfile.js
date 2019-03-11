const fs = require('fs');
const customers = require('./data/customers');
const transactions = require('./data/transactions');
const productBase = require('./data/productBase');

const filePath = './data.db';

try {
  fs.unlinkSync(filePath);
} catch (err) {
  console.error(err);
}

const knex = require('knex')({
  dialect: 'sqlite3',
  connection: {
    filename: './data.db'
  }
});

knex.schema.dropTableIfExists('customers');
knex.schema.dropTableIfExists('transactions');
knex.schema.dropTableIfExists('categories');

knex.schema
  .createTable('customers', table => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
  })
  .createTable('transactions', table => {
    table.increments('id');
    table.string('type');
    table.string('amount');
    table.timestamps(false, true);
    table
      .integer('customer_id')
      .unsigned()
      .references('customers.id');
  })
  .then(() => {
    return knex.insert(customers).into('customers');
  })
  .then(() => {
    return knex.insert(transactions).into('transactions');
  })
  .then(() => {
    return knex('customers').select('*');
  })
  .map(row => {
    console.log(row);
  })
  .then(() => {
    return knex('transactions').select('*');
  })
  .map(row => {
    console.log(row);
  })
  .catch(e => {
    console.error(e);
  });
