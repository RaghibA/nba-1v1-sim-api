const express = require('express')
const chalk = require('chalk')



// INIT Express app
const app = express()
const port = process.env.PORT || 4040
const apiURL = 'localhost'

app.use(express.json())
// TODO: Import router

// Listen for connection
app.listen(port, apiURL, () => {
  console.log(chalk.blue.inverse('API running at address: ' + apiURL + ':' + port))
})