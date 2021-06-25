// TODO: Migrate simulation logic from python to node.js

const simGame = (player1, player2, callback) => {

  //! TEST CODE: Send dummy sim results
  const simResults = {
    limit: 4,
    player1,
    player2,
    turns: [
      {
        turn: 1,
        p1Score: 0,
        p2Score: 0,
        pos: 1
      },
      {
        turn: 2,
        p1Score: 0,
        p2Score: 1,
        pos: 1
      },
      {
        turn: 3,
        p1Score: 0,
        p2Score: 1,
        pos: 2
      },
      {
        turn: 4,
        p1Score: 2,
        p2Score: 1,
        pos: 2
      },
      {
        turn: 5,
        p1Score: 2,
        p2Score: 1,
        pos: 1
      },
      {
        turn: 6,
        p1Score: 2,
        p2Score: 3,
        pos: 1
      },
      {
        turn: 7,
        p1Score: 2,
        p2Score: 4,
        pos: 1
      },
    ]
  }
  
  callback(undefined, simResults)
  
  // TODO: Implement simulation logic
}

module.exports = simGame