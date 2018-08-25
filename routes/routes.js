const express = require('express')

const db = require('../db')

const router = express.Router()

// Route for home page
router.get('/', (req, res) => {
  db.getNames()
    .then(people => {
      res.render('index', {people})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Post the name from index page to render the
// compliments page

router.post('/login', (req, res) => {
  const id = req.body.id
  res.redirect(`/compliments/${id}`)
})

// get route to show compliments page
// todo: refactor to use one query only
router.get('/compliments/:id', (req, res) => {
  db.getNames()
    .then(people => {
      let user = {
        id: parseInt(req.params.id),
        name: ''
      }
      let receivers = people.filter(x => {
        if (x.id !== user.id) {
          return true
        } else {
          user.name = x.name
          return false
        }
      })
      res.render('compliments', {
        user,
        receivers
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// post route to show receive page
router.post('/submit/:id', (req, res) => {
  const id = Number(req.params.id)
  const receiverId = req.body.receiver_id
  const phrase = req.body.phrase
  db.sendCompliment(receiverId, phrase)
    .then(() => {
      res.redirect(`/complimentsfor/${id}`)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/complimentsfor/:id', (req, res) => {
  const id = Number(req.params.id)
  let receiverName
  db.getName(id)
    .then(name => {
      receiverName = name
    })
    .then(() => {
      db.getPhrase(id)
        .then(phrase => {
          res.render('receive', {
            phrase: phrase,
            receiverName})
        })
    })
})

module.exports = router
