const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getNames,
  getName,
  getCompliments,
  sendCompliment,
  getPhrase
}

// function to get  people from the database
function getNames (testConn) {
  const conn = testConn || connection
  return conn('people').select()
}

// function that passes in a id from our get route and matches the params with the
// id in our database and returns the first match of everything that relates to the id
function getName (id, testConn) {
  const conn = testConn || connection
  return conn('people').where('id', id).first().select('name')
}

// function to get  complliments from the database
function getCompliments (id, testConn) {
  const conn = testConn || connection
  return conn('compliments').where('id', id).first()
}

function sendCompliment (receiverId, phrase, testConn) {
  const conn = testConn || connection
  return conn('compliments').insert({
    phrase: phrase,
    receiver_id: receiverId
  })
}

function getPhrase (id, testConn) {
  const conn = testConn || connection
  return conn('compliments')
    .where('receiver_id', id)
    .select('phrase')
}
