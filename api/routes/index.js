const knex = require('../../db')

const customers = require('./customers')(knex)
const creditCardTypes = require('./credit-card-types')(knex)
const creditCards = require('./credit-cards')(knex)
const rewards = require('./rewards')(knex)
const interests = require('./interests')(knex)
const companies = require('./companies')(knex)

module.exports = [
  { path: '/customers', module: customers },
  { path: '/credit-card-types', module: creditCardTypes },
  { path: '/credit-cards', module: creditCards },
  { path: '/rewards', module: rewards },
  { path: '/interests', module: interests },
  { path: '/companies', module: companies }
]
