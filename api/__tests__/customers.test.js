const knex = require("../../db");
const request = require("supertest");
const customers = require("../routes/customers")(knex);
const customerJSON = require("../../data/customers");
const profileJSON = require("../../data/customerProfiles");
const interestJSON = require("../../data/customerInterests");
const transactionJSON = require("../../data/transactions");
const pointBalanceJSON = require("../../data/customerBalances");

describe("Customers Endpoint", () => {
  describe("/", () => {
    it("Should respond to GET method", () => {
      return request(customers)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.length).toBe(customerJSON.length);
        });
    });
  });

  describe("/:customerId", () => {
    it("Should respond to GET method", () => {
      return request(customers)
        .get("/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.id).toBe(1);
        });
    });

    it("Should respond with 404 when requested item doesn't exist", () => {
      return request(customers)
        .get("/9999")
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  });

  describe("/:customerId/profile", () => {
    const profile = profileJSON.find(el => el.user_id === 1);

    it("Should respond to GET method", () => {
      return request(customers)
        .get("/1/profile")
        .then(response => {
          expect(response.statusCode).toBe(200);
          Object.keys(response[0]).forEach(key => {
            expect(response[0][key]).toBe(profile[key]);
          });
        });
    });
  });

  describe("/:customerId/interests", () => {
    const interest = interestJSON.find(el => el.user_id === 1);

    it("Should respond to GET method", () => {
      return request(customers)
        .get("/1/interests")
        .then(response => {
          expect(response.statusCode).toBe(200);
          Object.keys(response[0]).forEach(key => {
            expect(response[0][key]).toBe(interest[key]);
          });
        });
    });
  });

  describe("/:customerId/transactions", () => {
    const transaction = transactionJSON.find(el => el.user_id === 1);

    it("Should respond to GET method", () => {
      return request(customers)
        .get("/1/transactions")
        .then(response => {
          expect(response.statusCode).toBe(200);
          Object.keys(response[0]).forEach(key => {
            expect(response[0][key]).toBe(transaction[key]);
          });
        });
    });
  });

  describe("/:customerId/balances", () => {
    const balance = pointBalanceJSON.find(el => el.user_id === 1);

    it("Should respond to GET method", () => {
      return request(customers)
        .get("/1/balances")
        .then(response => {
          expect(response.statusCode).toBe(200);
          Object.keys(response[0]).forEach(key => {
            expect(response[0][key]).toBe(balance[key]);
          });
        });
    });
  });
});
