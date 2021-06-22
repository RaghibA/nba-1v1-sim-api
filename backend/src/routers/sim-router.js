const express = require('express')
// const Player = require('../models/player-model')

const router = express.Router()

// API endpoint for simulation
// Get simulation results
router.get('/sim', async (req, res) => {
  console.log('test')
  res.status(200).send()
})

module.exports = router