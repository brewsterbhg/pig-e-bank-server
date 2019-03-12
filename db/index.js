const generateSchema = require("./schema");

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: ":memory:"
  },
  useNullAsDefault: true
});

generateSchema(knex);

module.exports = knex;
