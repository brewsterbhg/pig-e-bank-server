const router = require('express').Router()
const getCreditCard = require('./../services/recommendCcService')
module.exports = knex => {
  router.get('/:customerId', (req, res, next) => {
    const customerId = req.params.customerId
    console.log('recommendations')
    knex('transactions')
      .select('type')
      .count('type as count')
      .where('customer_id', customerId)
      .groupBy('type')
      .orderBy('count', 'desc')
      .limit(1)
      .then(results => {
        const creditCard = getCreditCard(results[0].type)
        res.status(200).json(creditCard)
      })
      .catch(err => {
        next(err)
      })
  })

  return router
}
