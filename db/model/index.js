const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
 
    name:{
        type:String
    },
    price:{
       type:Number
    },
    description:{
        type:String
    },
    date :{
        type:Date,
        default:Date.now
    },
    img:{
        type:String
    }
})


const FoodData = new mongoose.model("FoodData" ,foodSchema)

module.exports = FoodData