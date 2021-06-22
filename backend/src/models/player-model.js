const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  pointsPerGame: {
    type: Number
  }
  // TODO: Add attributes required for player model
})

module.exports = playerSchema