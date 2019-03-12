const knex = require("../../db");
const request = require("supertest");
const creditCardTypes = require("../routes/credit-card-types")(knex);
const creditCardTypesJSON = require("../../data/creditCardTypes");

describe("CreditCardTypes Endpoint", () => {
  describe("/", () => {
    it("Should respond to GET method", () => {
      return request(creditCardTypes)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.length).toBe(creditCardTypesJSON.length);
        });
    });
  });

  describe("/:creditCardId", () => {
    it("Should respond to GET method", () => {
      return request(creditCardTypes)
        .get("/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.id).toBe(1);
        });
    });

    it("Should respond with 404 when requested item doesn't exist", () => {
      return request(creditCardTypes)
        .get("/9999")
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  });
});
