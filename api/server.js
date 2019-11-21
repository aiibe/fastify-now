'use strict'
const path = require('path')
const fastify = require('fastify')({ logger: true })

// Static assets
fastify.register(require('fastify-static'), {
  root: path.join(__dirname , '../public'),
  prefix: '/public/'
})

// Template engine
fastify.register(require('point-of-view'), {
    engine: {
        handlebars: require('handlebars')
    }
})

// Routes
fastify.register(require('../routes'))


// Fastify Lambda
module.exports = async function (req, res) {
  await fastify.ready()
  fastify.server.emit('request', req, res)
}