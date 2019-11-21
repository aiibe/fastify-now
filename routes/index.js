'use stric'

module.exports = (fastify, opts, next) => {

  // Home
  fastify.get('/', function(req, res){
    res.view('views/index.hbs', {})
  })
  
  // test
  fastify.get('/ok', function(req, res){
    res.send("ok")
  })

  next()
}