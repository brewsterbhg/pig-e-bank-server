const request = require('supertest')
const express = require('express')

let app = express()
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './sqlite.db'
  },
  useNullAsDefault: true
})
const companies = require('../routes/companies')(knex)
const creditCardTypes = require('../routes/credit-card-types')(knex)

describe('Companies Endpoint', () => {
  beforeAll(() => {
    app.use('/companies', companies)
  })

  describe('/v1/companies/', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/companies')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body.length).not.toEqual(0)
          expect(response.body[0]).toHaveProperty('id')
        })
    })
  })

  describe('/companies/:companyId', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/companies/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String)
          })
        })
    })

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/companies/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })

  describe('/companies/:companyId/promotions', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/companies/1/promotions')
        .set('Accept', 'application/json')
        .expect(200)
        .then(res => {
          expect(res.body.length).not.toEqual(0)
          expect(res.body[0]).toMatchObject({
            name: expect.any(String),
            description: expect.any(String)
          })
        })
    })
  })
})

describe('CreditCardTypes Endpoint', () => {
  beforeAll(() => {
    app.use('/credit-card-types', creditCardTypes)
  })

  describe('/credit-card-types', () => {
    it.only('Should respond to GET method', done => {
      return request(app)
        .get('/credit-card-types/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('/credit-card-types/:creditCardId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/credit-card-types/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: 'Cashback' })
        })
        .expect(200, done)
    })

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/credit-card-types/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })
})

describe('CreditCards Endpoint', () => {
  describe('/v1/credit-cards', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/credit-cards/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('/v1/credit-cards/:creditCardId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/credit-cards/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({
            id: 1,
            name: 'Scotia Momentum Visa Infinitie',
            interest_rate: '19.99%',
            annual_fee: '$99',
            type_id: 1
          })
        })
        .expect(200, done)
    })

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/credit-cards/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })
})

// only using the tests below because the other routes are not needed yet
describe.only('Customers Endpoint', () => {
  beforeAll(() => {
    const customers = require('../routes/customers')(knex)
    app.use('/v1/customers', customers)
  })

  describe('/v1/customers', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/v1/customers')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body.length).not.toEqual(0)
          expect(response.body[0]).toHaveProperty(
            'is_active',
            expect.any(Number)
          )
        })
    })
  })

  describe('/v1/customers/:customerId', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/v1/customers/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toHaveProperty('is_active', expect.any(Number))
        })
    })

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/customers/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })

  describe('/:customerId/profile', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/v1/customers/1/profile')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body).toMatchObject({
            id: expect.any(Number),
            first_name: expect.any(String),
            last_name: expect.any(String),
            email_address: expect.any(String),
            address: expect.any(String),
            customer_id: expect.any(Number)
          })
        })
    })
  })

  // describe('/:customerId/interests', () => {
  //   it('Should respond to GET method', done => {
  //     return request(app)
  //       .get('/v1/customers/1/interests')
  //       .set('Accept', 'application/json')
  //       .expect(res => {
  //         expect(res.body[0].name).toEqual('Traveling')
  //       })
  //       .expect(200, done)
  //   })
  // })

  describe('/:customerId/transactions', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/v1/customers/1/transactions')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body.length).not.toEqual(0)
          expect(response.body[0]).toHaveProperty('type', expect.any(String))
          expect(response.body[0]).toHaveProperty('vendor', expect.any(String))
          expect(response.body[0]).toHaveProperty('amount', expect.any(String))
          expect(response.body[0]).toHaveProperty('date', expect.any(String))
        })
    })
  })

  describe('/:customerId/balances', () => {
    it('Should respond to GET method', () => {
      return request(app)
        .get('/v1/customers/1/balances')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body.length).not.toEqual(0)
          expect(response.body[0]).toHaveProperty('name', expect.any(String))
          expect(response.body[0]).toHaveProperty('amount', expect.any(String))
        })
    })
  })
})

describe('Interests Endpoint', () => {
  describe('/v1/interests', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/interests')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('/v1/interests/:interestId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/interests/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: 'Traveling' })
        })
        .expect(200, done)
    })

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/interests/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })
})

describe('Rewards Endpoint', () => {
  describe('/v1/rewards', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/rewards/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
  })

  describe('/v1/rewards/:rewardId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/rewards/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: 'Air Miles' })
        })
        .expect(200, done)
    })

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/rewards/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
  })
})
