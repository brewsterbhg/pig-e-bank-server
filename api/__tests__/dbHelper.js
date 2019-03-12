const generateSchema = require("./../../db/schema");

module.exports = {
  build: async () => {
    const knex = require("knex")({
      client: "sqlite3",
      connection: {
        filename: ":memory:"
      },
      useNullAsDefault: true
    });
    return await generateSchema(knex);
  }
};
