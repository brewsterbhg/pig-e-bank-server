const generateSchema = require('./schema')
const fs = require('fs')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    // filename: 'file:memDb1?mode=memory&cache=shared'
    // filename: ':memory:'
    filename: './sqlite.db'
  },
  useNullAsDefault: true
})

const checkDbFile = path => fs.existsSync(path)

if (!checkDbFile('./sqlite.db')) {
  generateSchema(knex).then(() => process.exit(0))
}

console.log('db created')
