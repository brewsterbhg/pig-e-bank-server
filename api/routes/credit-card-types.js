const router = require('express').Router()

module.exports = knex => {
  router.get('/', (req, res, next) => {
    knex('credit_card_types')
      .select('*')
      .then(results => {
        res.status(200).json(results)
      })
      .catch(err => {
        next(err)
      })
  })

  router.get('/:creditCardTypeId', (req, res, next) => {
    knex('credit_card_types')
      .select('*')
      .where('id', req.params.creditCardTypeId)
      .then(results => {
        if (results.length === 0) {
          res.status(404).json([])
        } else {
          res.status(200).json(results[0])
        }
      })
      .catch(err => {
        next(err)
      })
  })

  return router
}
