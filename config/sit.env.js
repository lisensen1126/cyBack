'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"sit"',
  BASE_URL:'"http://127.0.0.2:5002"',
  ENV_CONFIG:'"sit"',
})