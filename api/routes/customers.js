const router = require("express").Router();

module.exports = knex => {
  router.get("/", (req, res, next) => {
    knex("customers")
      .select("*")
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  router.get("/:customerId", (req, res, next) => {
    knex("customers")
      .select("*")
      .where("id", req.params.customerId)
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

  router.get("/:customerId/profile", (req, res, next) => {
    knex("customers")
      .join(
        "customer_profiles",
        "customers.id",
        "customer_profiles.customer_id"
      )
      .select("customer_profiles.*")
      .where("customers.id", req.params.customerId)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  router.get("/:customerId/interests", (req, res, next) => {
    knex("customers")
      .join(
        "customer_interests",
        "customers.id",
        "customer_interests.customer_id"
      )
      .join("interests", "customer_interests.id", "interests.id")
      .select("interests.name")
      .where("customers.id", req.params.customerId)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  router.get("/:customerId/transactions", (req, res, next) => {
    knex("customers")
      .join("transactions", "customers.id", "transactions.customer_id")
      .select("*")
      .where("customers.id", req.params.customerId)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  router.get("/:customerId/balances", (req, res, next) => {
    knex("customers")
      .join("point_balances", "customers.id", "point_balances.customer_id")
      .join("rewards", "point_balances.reward_id", "rewards.id")
      .select("rewards.name", "point_balances.amount")
      .where("customers.id", req.params.customerId)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        next(err);
      });
  });

  return router;
};
