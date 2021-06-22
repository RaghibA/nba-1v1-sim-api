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
  // ... Add every attribute required for player model
})