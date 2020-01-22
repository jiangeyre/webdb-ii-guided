// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3',
    },
    useNullAsDefault: true,
    migrations: {
        directory: "./data/migrations",
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};


// npm i -g knex or just use npx knex for commands
// knex init
// copy from fruits router the config object
// to knexfile.js
// add the migrations key to knexfile.js
// run: knex migrate:make songs_table