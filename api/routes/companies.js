const router = require("express").Router();

module.exports = knex => {
  router.get("/", (req, res, next) => {
    knex("companies")
      .select("*")
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  router.get("/:companyId", (req, res, next) => {
    knex("companies")
      .select("*")
      .where("id", req.params.companyId)
      .then(results => {
        if (results.length === 0) {
          res.status(404).json([]);
        } else {
          res.status(200).json(results[0]);
        }
      })
      .catch(err => {
        next(err);
      });
  });

  router.get("/:companyId/promotions", (req, res, next) => {
    knex("companies")
      .join("promotions", "companies.id", "promotions.company_id")
      .select("promotions.name", "promotions.description")
      .where("companies.id", req.params.companyId)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  return router;
};
