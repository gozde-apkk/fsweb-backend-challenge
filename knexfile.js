// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// do not make changes to this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = OFF', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/twitter.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};