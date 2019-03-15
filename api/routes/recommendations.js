const router = require('express').Router()
const getCreditCard = require('./../services/recommendCcService')
module.exports = knex => {
  router.get('/:customerId', (req, res, next) => {
    const customerId = req.params.customerId

    knex('transactions')
      .select('type', 'amount')
      .count('type as count')
      .sum('amount as total')
      .where('customer_id', customerId)
      .groupBy('type')
      .orderBy('count', 'desc')
      .limit(1)
      .then(results => {
        const total = parseFloat(results[0].total).toFixed(2)
        const type = results[0].type
        const creditCards = getCreditCard(total, type)

        return res.status(200).json(creditCards)
      })
      .catch(err => {
        next(err)
      })
  })

  return router
}
