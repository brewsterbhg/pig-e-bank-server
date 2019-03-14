const knex = require('./db/knex')
const generateSchema = require('./db/schema')

generateSchema(knex).then(() => require('./server'))
