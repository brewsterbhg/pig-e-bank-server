const router = require('express').Router()
const routes = require('./routes')

routes.forEach(route => {
  router.use(route.path, route.module)
})

module.exports = router
