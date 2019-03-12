const knex = require("../../db");
const request = require("supertest");
const interests = require("../routes/interests")(knex);
const interestsJSON = require("../../data/interests");

describe("Interests Endpoint", () => {
  describe("/", () => {
    it("Should respond to GET method", () => {
      return request(interests)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.length).toBe(interestsJSON.length);
        });
    });
  });

  describe("/:interestId", () => {
    it("Should respond to GET method", () => {
      return request(interests)
        .get("/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.id).toBe(1);
        });
    });

    it("Should respond with 404 when requested item doesn't exist", () => {
      return request(interests)
        .get("/9999")
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  });
});
