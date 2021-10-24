
const mongoose = require('mongoose');

const dotenv = require('dotenv')

dotenv.config()

const mongodb = process.env.DB_CONN;

mongoose.connect(mongodb, { useNewUrlParser: true }).then(() => {

    console.log("database is succsfully connected")

}).catch(() => {

    console.log("database is not connected")

});
