const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    // filename: 'file:memDb1?mode=memory&cache=shared'
    // filename: ':memory:'
    filename: './sqlite.db'
  },
  useNullAsDefault: true
})
module.exports = knex
