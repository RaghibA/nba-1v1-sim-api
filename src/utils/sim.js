require('../db/mongoose')
const playerObject = require('./player')
const Player = require('../models/player-model')
const simPercentages = require('./simPercentages')


const simGame = async (playerOneId, playerTwoId, score, callback) => {

  // Retrieve player stats from database
  const p1 = await Player.findOne({ player_id: playerOneId })
  const p2 = await Player.findOne({ player_id: playerTwoId })

  let player1 = new playerObject(p1.player_name, p1.field_goal_pct, p1.three_pt_pct,
    p1.field_goal_taken, p1.three_pt_made, p1.rebounds,
    p1.block_pct, p1.steal_pct, p1.height, p1.def_rating)

  let player2 = new playerObject(p2.player_name, p2.field_goal_pct, p2.three_pt_pct,
    p2.field_goal_taken, p2.three_pt_made, p2.rebounds,
    p2.block_pct, p2.steal_pct, p2.height, p2.def_rating)

  // Simulate game to {score}
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

  while (p1Score <= score || p2Score <= score) {
    let swapPos = false
    let shot = 0
    let madeShot = false
    let rebound = -1

    // console.log(chalk.greenBright(p1Score + ' ' + p2Score))
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
          if (rb === true) {
            swapPos = false
            rebound = 1
          }
          else {
            swapPos = true
            rebound = 2
          }
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
          if (rb === true) {
            swapPos = false
            rebound = 1
          }
          else {
            swapPos = true
            rebound = 2
          }
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
          if (rb === true) {
            swapPos = false
            rebound = 2
          }
          else {
            swapPos = true
            rebound = 1
          }
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
          if (rb === true) {
            swapPos = false
            rebound = 2
          }
          else {
            swapPos = true
            rebound = 1
          }
        } 
      } // End Player 2 
    }

    //! Update simulation data
    sim.turns.push({ turn, p1Score, p2Score, pos, shot, madeShot, rebound })
          
    if (swapPos === true) { // Change possesion 
      if (pos === 1) { pos = 0 }
      else (pos = 1)
    }
    turn += 1 // Increment turn
          
    if(p1Score >= score || p2Score >= score) {break}
  }

  // Send results through callback
  if (sim) { callback(undefined, sim) }
  else {callback({err: "sim.js failed to execute"}, undefined)}
  
}

module.exports = simGame
