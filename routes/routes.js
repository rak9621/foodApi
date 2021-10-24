const express = require('express')
const router = express.Router()
const FoodData = require('../db/model')
require('../db/conn')

router.get('/food' ,async (req,res) => {

    try {

        const data = await FoodData.find()
        res.status(401).send(data)

    } catch (e) {
        res.status(201).send("data not be posted",e)
    }
})


router.post('/food', async(req,res) => {
 
    try {
    
        const data = req.body
    
        const fooditem = new FoodData(data)
    
        const result = await fooditem.save();
    
        res.status(401).send(result)
        
    } catch (e) {
        
       res.status(201).send("data not be posted",e)
        
    } 
 })


module.exports  = router 
