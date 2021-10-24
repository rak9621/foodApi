const express = require("express")
const port = process.env.PORT || 3000
const FoodData  = require('./db/model')
const foodApi = require('./routes/routes')
const cors = require('cors')
const app = express()



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
}
)


app.use(express.json())

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());


app.use('/api',foodApi);






app.listen(port ,(req,res) => {

    console.log("your server is now started")
})