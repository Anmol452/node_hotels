const express = require('express')
const router = express.Router()
const Person = require('../models/Person')
const bodyParser = require('body-parser')
const db = require('../db')


router.use(bodyParser.json())



router.post('/', async (req, res)=>{
    try{
  const data = req.body

  // create a new person document using the Mongoose model
  const newPerson = new Person(data)

  // Save the new person to the database 
 const response = await newPerson.save()
    console.log('data saved');
    res.status(200).json(response)
    
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'})
    }

})


/// read data
router.get('/', async (req, res)=> {
   try {
      const data = await Person.find();
      console.log('data finded');
      res.status(200).json(data)

   } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Internal Server Error'})
   }
})


router.put('/:id', async (req, res)=> {
    try {
        const reqdata = req.params.id
        const updatedata = req.body
       const data = await Person.findByIdAndUpdate(reqdata, updatedata, {
        new: true,
        runValidators :true , 
       });
       if(!data){
        return res.status(404).json({error: "Person not found !"})
       }
       console.log('data updateed');
       res.status(200).json(data)
 
    } catch (error) {
       console.log(error);
       res.status(500).json({error: 'Internal Server Error'})
    }
 })


 
router.delete('/:id', async (req, res)=> {
    try {
        const id = req.params.id
       const data = await Person.deleteMany( { _id: id } )
       console.log('data deleted');
       res.status(200).json(data)
 
    } catch (error) {
       console.log(error);
       res.status(500).json({error: 'Internal Server Error'})
    }
 })


 
 router.get('/:slug', async (req, res) => {
 
    try {
       const resdata = req.body
       const slug = req.params.slug
 
       if (slug == 'chef' || slug == 'waiter' || slug == 'manager') {
          const data = await Person.find({work: slug})
          res.status(200).json(data)
       }  else {
           console.log("no data for : ", slug)
         res.end("not data")
         
       }
    }
    catch (error) {
       console.log(error);
       res.status(500).json({ error: 'Internal Server Error' })
    }
 })


module.exports = router