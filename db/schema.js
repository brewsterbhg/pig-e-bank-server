const customers = require("../data/customers");
const profiles = require("../data/customerProfiles");
const interests = require("../data/interests");
const customerInterests = require("../data/customerInterests");
const transactions = require("../data/transactions");
const creditCards = require("../data/creditCards");
const creditCardTypes = require("../data/creditCardTypes");
const rewards = require("../data/rewards");
const balances = require("../data/customerBalances");
const companies = require("../data/companies");
const promotions = require("../data/promotions");

const generateSchema = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable("customers", table => {
        table.increments("id");
        table.boolean("is_active");
        table.timestamps(false, true);
      })
      .createTable("customer_profiles", table => {
        table.increments("id");
        table.string("first_name");
        table.string("last_name");
        table.string("email_address");
        table.string("address");
        table
          .integer("customer_id")
          .unsigned()
          .references("customers.id");
      })
      .createTable("interests", table => {
        table.increments("id");
        table.string("name");
      })
      .createTable("customer_interests", table => {
        table.increments("id");
        table
          .integer("interest_id")
          .unsigned()
          .references("interests.id");
        table
          .integer("customer_id")
          .unsigned()
          .references("customers.id");
        table.timestamps(false, true);
      })
      .createTable("transactions", table => {
        table.increments("id");
        table.string("type");
        table.string("amount");
        table.timestamps(false, true);
        table
          .integer("customer_id")
          .unsigned()
          .references("customers.id");
      })
      .createTable("credit_card_types", table => {
        table.increments("id");
        table.string("name");
      })
      .createTable("credit_cards", table => {
        table.increments("id");
        table.string("name");
        table.string("interest_rate");
        table.string("annual_fee");
        table
          .integer("type_id")
          .unsigned()
          .references("credit_card_types.id");
      })
      .createTable("rewards", table => {
        table.increments("id");
        table.string("name");
      })
      .createTable("point_balances", table => {
        table.increments("id");
        table
          .integer("customer_id")
          .unsigned()
          .references("customers.id");
        table
          .integer("reward_id")
          .unsigned()
          .references("rewards.id");
        table.string("amount");
      })
      .createTable("companies", table => {
        table.increments("id");
        table.string("name");
      })
      .createTable("promotions", table => {
        table.increments("id");
        table.string("name");
        table.string("description");
        table
          .integer("company_id")
          .unsigned()
          .references("companies.id");
      })
      .then(() => {
        return Promise.all([
          knex.insert(customers).into("customers"),
          knex.insert(profiles).into("customer_profiles"),
          knex.insert(interests).into("interests"),
          knex.insert(customerInterests).into("customer_interests"),
          knex.insert(transactions).into("transactions"),
          knex.insert(creditCardTypes).into("credit_card_types"),
          knex.insert(creditCards).into("credit_cards"),
          knex.insert(rewards).into("rewards"),
          knex.insert(balances).into("point_balances"),
          knex.insert(companies).into("companies"),
          knex.insert(promotions).into("promotions")
        ]);
      })
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = generateSchema;
