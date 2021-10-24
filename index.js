const express = require("express")
const port = process.env.PORT || 3000
const FoodData  = require('./db/model')
const cors = require('cors')
const app = express()
require('./db/conn')


app.use(express.json())

app.use(cors())


app.get('/' ,async (req,res) => {
    try {
        const data = await FoodData.find()
        res.status(401).send(data)
    } 
    catch (e) {
        res.status(201).send("data not be posted",e)
    }
})

app.post('/' ,async (req,res) => {
    try {
        const data = req.body
        
        const fooditem = new FoodData(data)

        const result  = await fooditem.save();
        res.status(401).send(result)
    } 
    catch (e) {
        res.status(201).send("data not be posted",e)
    }


})


app.get('/:id',async (req,res) => {

    try {
      
        const _id = req.params.id
        const result = await FoodData.findById({_id})

        res.status(401).send(result)
  
    } catch (e) {
      
          res.status(201).send(e)
    }
  })




  app.delete('/', async (req,res)=> {
  
    try {
    
      const result  = await FoodData.deleteMany()
    
      res.status(401).send(result)
    
        
    } catch (e) {
  
      res.status(201).send(e)
  
    }
    })
  
  
    app.delete('/:id',async (req,res)=> {
  
      try {
      
        const _id = req.params.id
         
        const result  = await FoodData.findByIdAndDelete({_id})
      
        res.status(401).send(result)
      
          
      } catch (e) {
  
        res.status(201).send(e)
        
      }
  
  
      })
  app.patch('/:id',async (req,res)=> {
  
        try {
        
          const _id = req.params.id
           
          const result  = await FoodData.findByIdAndUpdate({_id},req.body,{ new :true})
        
              res.status(401).send(result)
            
        } catch (e) {
  
              res.status(201).send(e)
        }

  })

app.listen(port ,(req,res) => {

    console.log("your server is now started")
})