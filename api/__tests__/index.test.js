const { app, server } = require('../../server');
const request = require('supertest');
const promotionsJSON = require('../../data/promotions');

afterAll(() => server.close());

describe('Companies Endpoint', () => {
  describe('/v1/companies/', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/companies/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('/companies/:companyId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/companies/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: 'Test Company' });
        })
        .expect(200, done);
    });

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/companies/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });

  describe('/companies/:companyId/promotions', () => {
    const promotion = promotionsJSON.find(el => el.company_id === 1);

    it('Should respond to GET method', done => {
      return request(app)
        .get('/v1/companies/1/promotions')
        .set('Accept', 'application/json')
        .expect(res => {
          Object.keys(res.body[0]).forEach(key => {
            expect(res.body[0][key]).toEqual(promotion[key]);
          });
        })
        .expect(200, done);
    });
  });
});

describe('CreditCardTypes Endpoint', () => {
  describe('/v1/credit-card-types', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/credit-card-types/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('/v1/credit-card-types/:creditCardId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/credit-card-types/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: 'Cashback' });
        })
        .expect(200, done);
    });

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/credit-card-types/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });
});

describe('CreditCards Endpoint', () => {
  describe('/v1/credit-cards', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/credit-cards/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

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
          });
        })
        .expect(200, done);
    });

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/credit-cards/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });
});

describe('Customers Endpoint', () => {
  describe('/v1/customers', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/interests')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('/v1/customers/:customerId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/customers/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body.id).toEqual(1);
        })
        .expect(200, done);
    });

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/customers/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });

  describe('/:customerId/profile', () => {
    it('Should respond to GET method', done => {
      return request(app)
        .get('/v1/customers/1/profile')
        .set('Accept', 'application/json')
        .expect(res => {
          expect(res.body[0].customer_id).toEqual(1);
        })
        .expect(200, done);
    });
  });

  describe('/:customerId/interests', () => {
    it('Should respond to GET method', done => {
      return request(app)
        .get('/v1/customers/1/interests')
        .set('Accept', 'application/json')
        .expect(res => {
          expect(res.body[0].name).toEqual("Traveling");
        })
        .expect(200, done);
    });
  });

  describe('/:customerId/transactions', () => {
    it('Should respond to GET method', done => {
      return request(app)
        .get('/v1/customers/1/transactions')
        .set('Accept', 'application/json')
        .expect(res => {
          expect(res.body[0].customer_id).toEqual(1);
        })
        .expect(200, done);
    });
  });

  describe('/:customerId/balances', () => {
    it('Should respond to GET method', done => {
      return request(app)
        .get('/v1/customers/1/balances')
        .set('Accept', 'application/json')
        .expect(res => {
          expect(res.body[0].name).toEqual('Air Miles');
        })
        .expect(200, done);
    });
  });
});

describe('Interests Endpoint', () => {
  describe('/v1/interests', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/interests')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('/v1/interests/:interestId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/interests/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: 'Traveling' });
        })
        .expect(200, done);
    });

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/interests/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });
});

describe('Rewards Endpoint', () => {
  describe('/v1/rewards', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/rewards/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('/v1/rewards/:rewardId', () => {
    it('Should respond to GET method', done => {
      request(app)
        .get('/v1/rewards/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: 'Air Miles' });
        })
        .expect(200, done);
    });

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get('/v1/rewards/9999')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });
});
