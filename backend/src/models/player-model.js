const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  player_name: {
    type: String
  },
  player_id: {
    type: Number
  },
  field_goal_pct: {
    type: Number
  },
  three_pt_pct: {
    type: Number
  },
  field_goal_taken: {
    type: Number
  },
  three_pt_made: {
    type: Number
  },
  rebounds: {
    type: Number
  },
  block_pct: {
    type: Number
  },
  steal_pct: {
    type: Number
  },
  height: {
    type: Number
  },
  def_rating: {
    type: Number
  }
})

const PlayerModel = mongoose.model('PlayerModel', playerSchema)
module.exports = PlayerModel