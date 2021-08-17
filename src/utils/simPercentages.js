//* Shooting odds adjusted for player stats
const chalk = require('chalk')

// Odds of a player taking a three-point shot
function takeThree(threesMade, fgTaken) {
  const pct = (threesMade * 1.25)/ fgTaken
  return Math.floor(Math.random() * 100) <= pct * 100
}

// Odds of player making a 1 point field goal
function midRangePct(p1_fg_pct, p2_def_rating) {
  const leagueAvgOffRating = 112
  const adjPercentage = ((p2_def_rating / leagueAvgOffRating) * p1_fg_pct) * 1.40
  const playerPercentage = Math.floor(Math.random() * 90)
  return playerPercentage <= adjPercentage
}

// Odds of player making a 2 point field goal
function threePct(p1_tp_pct, p2_def_rating) {
  const leagueAvgOffRating = 112
  const adjPercentage = ((p2_def_rating / leagueAvgOffRating) * p1_tp_pct) * 1.40
  const playerPercentage = Math.floor(Math.random() * 90)
  return playerPercentage <= adjPercentage
}

function offensiveRebound(p1_rebound, p1_height, p2_rebound, p2_height) {
  const h_diff = p1_height - p2_height
  const t_rb = p1_rebound + p2_rebound
  let rb = 0
  const playerRb = Math.floor(Math.random() * 100)

  // Offensive robound odds: P1 RPG / Total RPG of both players, scaled with height difference
  if (h_diff < 5 || h_diff > -5) { // minimal height difference
    rb = p1_rebound / t_rb
  } else if (-10 < h_diff < -5) { // Offensive player is noticably shorter
    rb = (p1_rebound / t_rb) * .85
  } else if (h_diff < -10) { // Offensive player is significantly shorter
    rb = (p1_rebound / t_rb) * .70
  } else if (10 > h_diff > 5) { // Offensive player is noticably taller
    rb = (p1_rebound / t_rb) * 1.20
  } else if (h_diff > 10) { // Offensive player is significantly taller
    rb = (p1_rebound / t_rb) * 1.35
  }

  rb *= 80
  return playerRb <= rb
}

module.exports = {
  takeThree,
  midRangePct,
  threePct,
  offensiveRebound
}