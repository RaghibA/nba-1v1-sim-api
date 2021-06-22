const express = require('express')
const cors = require('cors')

const chalk = require('chalk')

// Import Router
const simRouter = require('./routers/sim-router')

// INIT Express app
const app = express()
app.use(cors)

const port = process.env.PORT || 3000
const apiURL = 'localhost'

app.use(express.json())
app.use(simRouter)

// Listen for connection
app.listen(port, apiURL, () => {
  console.log(chalk.blue.inverse('API running at address: ' + apiURL + ':' + port))
})