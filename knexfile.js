module.exports = {
  development: {
    client: "pg",
    connection: process.env.POSTGRES_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/src/database/migrations",
    },
  },
};
