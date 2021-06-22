const mongoose = require('mongoose')
const chalk = require('chalk')

// TODO: Create mongo cluster with player data
// mongoose.connect('mongodb://127.0.0.1:27017/nba1v1', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// }, (e) => {
//     if (e) {
//         console.log(chalk.red.inverse('ERROR: Unable to connected to MongoDB'))
//     } else {
//         console.log(chalk.blue.inverse('Connected to MongoDB'))
//     }
// })