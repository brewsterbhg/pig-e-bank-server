const app = require("../../server");
const request = require("supertest");
const promotionsJSON = require("../../data/promotions");

describe("Companies Endpoint", () => {
  describe("/companies/", () => {
    it("Should respond to GET method", done => {
      request(app)
        .get("/v1/companies")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(res => {})
        .expect(200, done);
    });
  });

  describe("/companies/:companyId", () => {
    it("Should respond to GET method", done => {
      request(app)
        .get("/v1/companies/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(res => {
          expect(res.body).toEqual({ id: 1, name: "Test Company" });
        })
        .expect(200, done);
    });

    it("Should respond with 404 when requested item doesn't exist", done => {
      request(app)
        .get("/v1/companies/9999")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404, done);
    });
  });

  describe("/companies/:companyId/promotions", () => {
    const promotion = promotionsJSON.find(el => el.company_id === 1);

    it("Should respond to GET method", done => {
      return request(app)
        .get("/v1/comapnies/1/promotions")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(res => {})
        .expect(200, done);
    });
  });
});
