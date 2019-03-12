const knex = require("../../db");
const request = require("supertest");
const creditCards = require("../routes/credit-cards")(knex);
const creditCardJSON = require("../../data/creditCards");

describe("CreditCards Endpoint", () => {
  describe("/", () => {
    it("Should respond to GET method", () => {
      return request(creditCards)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.length).toBe(creditCardJSON.length);
        });
    });
  });

  describe("/:creditCardId", () => {
    it("Should respond to GET method", () => {
      return request(creditCards)
        .get("/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.id).toBe(1);
        });
    });

    it("Should respond with 404 when requested item doesn't exist", () => {
      return request(creditCards)
        .get("/9999")
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  });
});
