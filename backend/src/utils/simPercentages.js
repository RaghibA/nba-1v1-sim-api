//* Shooting odds adjusted for player stats

// Odds of a player taking a three-point shot
function takeThree(threesMade, fgTaken) {
  const pct = threesMade/ fgTaken
  return Math.floor(Math.random() * 100) <= pct
}

// Odds of player making a 1 point field goal
function midRangePct(p1_fg_pct, p2_def_rating) {
  const leagueAvgOffRating = 112
  const adjPercentage = (p2_def_rating / leagueAvgOffRating) * p1_fg_pct
  return Math.floor(Math.random() * 100) <= adjPercentage
}

// Odds of player making a 2 point field goal
function threePct(p1_tp_pct, p2_def_rating) {
  const leagueAvgOffRating = 112
  const adjPercentage = (p2_def_rating / leagueAvgOffRating) * p1_tp_pct
  return Math.floor(Math.random() * 100) <= adjPercentage
}

module.exports = {
  takeThree,
  midRangePct,
  threePct
}