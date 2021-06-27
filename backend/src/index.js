const express = require('express')
//require('./db/mongoose')
//const cors = require('cors')
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Import Router
const simRouter = require('./routers/sim-router')

const chalk = require('chalk')

// INIT Express app
//const app = express()
const port = process.env.PORT || 4004
const apiURL = 'localhost'
app.use(express.json())
//app.use(cors)
app.use(simRouter)
/*
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
*/
// Listen for connection

app.listen(port, apiURL, function(err) {
  if (err) return console.log(err);
  console.log(chalk.inverse.blue("Listening at http://localhost:" + port));
});