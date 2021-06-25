const express = require('express')
const Player = require('../models/player-model')
const simGame = require('../utils/sim')
const router = express.Router()

// API endpoint for simulation
// Get simulation results
router.get('/sim/:p1/:p2', async (req, res) => {

  // store the id of of the player from the req
  // and use it to retreive the models from db
  playerOneId = req.params.p1
  playerTwoId = req.params.p2

  // simulate game, then send results in response body
  simGame(playerOneId, playerTwoId, (err, result) => {
    if (err) {
      // Catch error
      res.status(500).send(err)
    } else {
      // send sim result
      res.status(200).send(result)
    }
  })
})

module.exports = router