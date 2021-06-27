require('../db/mongoose')
const player = require('./player')
const PlayerModel = require('../models/player-model')
const simPercentages = require('./simPercentages')
const e = require('express')
const chalk = require('chalk')


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
  let turn = 1

  // Simulation data
  let sim = {
    player1,
    player2,
    turns: []
  }

  while (p1Score <= 11 || p2Score <= 11) {
    let swapPos = false
    let shot = 0
    let madeShot = false

    console.log(chalk.greenBright(p1Score + ' ' + p2Score))
    if (pos === 0) { // Player 1 Possesion

      let takeThree = simPercentages.takeThree(player1.three_pt_made, player1.field_goal_taken)
      if (takeThree === false) { // Take midrange shot

        let mr = simPercentages.midRangePct(player1.field_goal_pct, player2.def_rating)
        shot = 1

        if (mr === true) {
          p1Score += 1
          madeShot = true
        }
        else { // Attempt offensive rebound
          let rb = simPercentages.offensiveRebound(player1.rebounds, player1.height,
            player2.rebounds, player2.height)
          if (rb === true) { swapPos = false }
          else{ swapPos = true}
        } 
        
      } else { // Take 2 point shot
        let tp = simPercentages.threePct(player1.three_pt_pct, player2.def_rating)
        shot = 2

        if (tp === true) {
          p1Score += 2
          madeShot = true
        }
        else { // Attempt offensive rebound
          let rb = simPercentages.offensiveRebound(player1.rebounds, player1.height,
            player2.rebounds, player2.height)
          if (rb === true) { swapPos = false }
          else{ swapPos = true}
        } 
      }

    } // End Player 1
    else if (pos === 1) { // Player 2 Possesion

      let takeThree = simPercentages.takeThree(player2.three_pt_made, player2.field_goal_taken)
      if (takeThree === false) { // Take midrange shot
        let mr = simPercentages.midRangePct(player2.field_goal_pct, player1.def_rating)
        shot = 1

        if (mr === true) {
          p2Score += 1
          madeShot = true
        }
        else { // Attempt offensive rebound
          let rb = simPercentages.offensiveRebound(player2.rebounds, player2.height,
            player1.rebounds, player1.height)
          if (rb === true) { swapPos = false }
          else{ swapPos = true}
        } 
        
      } else { // Take 2 point shot
        let tp = simPercentages.threePct(player2.three_pt_pct, player1.def_rating)
        shot = 2

        if (tp === true) {
          p2Score += 2
          madeShot = true
        }
        else { // Attempt offensive rebound
          let rb = simPercentages.offensiveRebound(player2.rebounds, player2.height,
            player1.rebounds, player1.height)
          if (rb === true) { swapPos = false }
          else{ swapPos = true}
        } 
      } // End Player 2 
    }

    //! Update simulation data
    sim.turns.push({ turn, p1Score, p2Score, pos, shot, madeShot })
          
    if (swapPos === true) { // Change possesion 
      if (pos === 1) { pos = 0 }
      else (pos = 1)
    }
    turn += 1 // Increment turn
          
    if(p1Score >= 11 || p2Score >= 11) {break}
  }

  // Send results through callback
  if (sim) { callback(undefined, sim) }
  else {callback({err: "sim.js failed to execute"}, undefined)}
  
}

module.exports = simGame
