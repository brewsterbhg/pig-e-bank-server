const knex = require("../../db");
const request = require("supertest");
const rewards = require("../routes/interests")(knex);
const rewardsJSON = require("../../data/interests");

describe("Rewards Endpoint", () => {
  describe("/", () => {
    it("Should respond to GET method", () => {
      return request(rewards)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.length).toBe(rewardsJSON.length);
        });
    });
  });

  describe("/:rewardId", () => {
    it("Should respond to GET method", () => {
      return request(rewards)
        .get("/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.id).toBe(1);
        });
    });

    it("Should respond with 404 when requested item doesn't exist", () => {
      return request(rewards)
        .get("/9999")
        .then(response => {
          expect(response.statusCode).toBe(404);
        });
    });
  });
});
