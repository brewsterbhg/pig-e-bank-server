const router = require('express').Router()

module.exports = knex => {
  router.get('/', (req, res, next) => {
    knex('credit_cards')
      .select('*')
      .then(results => {
        res.status(200).json(results)
      })
      .catch(err => {
        next(err)
      })
  })

  router.get('/:creditCardId', (req, res, next) => {
    knex('credit_cards')
      .select('*')
      .where('id', req.params.creditCardId)
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
