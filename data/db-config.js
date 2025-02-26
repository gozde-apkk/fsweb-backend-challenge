const knex = require('knex')

const {NODE_ENV} = require('../config');

const config = require('../knexfile.js')

const db = knex(config[NODE_ENV]);

module.exports = db;