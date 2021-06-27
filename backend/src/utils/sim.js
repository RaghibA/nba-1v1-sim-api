require('../db/mongoose')
const player = require('./player')
const PlayerModel = require('../models/player-model')
const simPercentages = require('./simPercentages')
const e = require('express')


const simGame = (playerOneId, playerTwoId, callback) => {

  // TODO: Import players from database
  
  //! DUMMY DATA
  let player1 = new player('LeBron James', 50.4, 34.5, 19.5, 1.5, 7.4, .7, 1.6, 206, 103.5)
  let player2 = new player('Luka Dončić', 45.7, 33.1, 19.1, 2.7, 8.4, .4, 1, 201, 110)
  
  // TODO: Implement simulation logic
  // Simulate game to 11
  let p1Score = 0
  let p2Score = 0
  let pos = Math.floor(Math.random() * 2); // Coin Flip for possesion

  while (p1Score <= 11 || p2Score <= 11) {
    if (pos === 1) {
      //* Sim player 1 possesion

      // Determine shot taken
      let takeThree = simPercentages.takeThree(player1.three_pt_made, player1.field_goal_taken)

      if (takeThree === false) {
        // Take midrange
      } else {
        // Take Three
      }

    } else if (pos === 2) {
      //* Sim player 2 possesion

      // Determine shot taken
      let takeThree = simPercentages.takeThree(player2.three_pt_made, player2.field_goal_taken)

      if (takeThree === false) {
        // Take midrange
      } else {
        // Take Three
      }
      
    }
  }

  // Send results through callback
  callback(undefined, {})
}

module.exports = simGame
