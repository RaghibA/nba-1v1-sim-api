const mongoose = require('mongoose')
const chalk = require('chalk')

// TODO: Populate mongo cluster with player data
mongoose.connect('mongodb+srv://user:pass1234@bball1v1.i5ahj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
}, (e) => {
    if (e) {
        console.log(chalk.red.inverse('ERROR: Unable to connected to MongoDB'))
    } else {
        console.log(chalk.blue.inverse('Connected to MongoDB'))
    }
})