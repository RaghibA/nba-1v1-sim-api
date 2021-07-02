// Create Player Object

function player(name, field_goal_pct, three_pt_pct, field_goal_taken,
  three_pt_made, rebounds, block_pct, steal_pct, height, def_rating) {

  // Create player object
  this.name = name
  this.field_goal_pct = field_goal_pct
  this.three_pt_pct = three_pt_pct
  this.field_goal_taken = field_goal_taken
  this.three_pt_made = three_pt_made
  this.rebounds = rebounds
  this.block_pct = block_pct
  this.steal_pct = steal_pct
  this.height = height
  this.def_rating = def_rating
  this.pos = 0

}

module.exports = player