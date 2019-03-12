const router = require("express").Router();

module.exports = knex => {
  router.get("/", (req, res, next) => {
    knex("interests")
      .select("*")
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  router.get("/:interestId", (req, res, next) => {
    knex("interests")
      .select("*")
      .where("id", req.params.interestId)
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

  return router;
};
