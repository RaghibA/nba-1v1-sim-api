const express = require('express')
const simGame = require('../utils/sim')
const router = express.Router()

// API endpoint for simulation
// Get simulation results
router.get('/sim/:p1/:p2/:score', (req, res) => {

  // Player ID's from http request
  playerOneId = req.params.p1
  playerTwoId = req.params.p2
  score = req.params.score

  // simulate game, then send results in response body
  simGame(playerOneId, playerTwoId, score, (err, result) => {
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