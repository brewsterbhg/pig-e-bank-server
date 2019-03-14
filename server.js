const express = require('express')
const compression = require('compression')
const PORT = process.env.PORT || 3000
const routes = require('./api')

const app = express()

app.use(compression())
app.use('/v1', routes)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

module.exports = app
