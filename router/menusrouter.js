const express = require('express')
const router = express.Router()
const menus = require('../models/menus')
const bodyParser = require('body-parser')
const db = require('../db')
// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

router.use(bodyParser.json())



// define the home page route


router.post('/', async (req, res) => {
   // res.end("ok")
   try {
      const data = req.body

      // create a new person document using the Mongoose model
      const newMenus = new menus(data)

      // Save the new person to the database 
      const response = await newMenus.save()
      console.log('data saved');
      res.status(200).json(response)

   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' })
   }

})


/// read data
router.get('/', async (req, res) => {
   try {
      const data = await menus.find();
      console.log('data finded');
      res.status(200).json(data)

   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' })
   }
})

// schrch

router.get('/:slug', async (req, res) => {

   try {
      const resdata = req.body
      const slug = req.params.slug

      if (slug == 'spicy' || slug == 'sour' || slug == 'sweet') {
         const data = await menus.find({taste: slug})
         res.status(200).json(data)
      }  else {
        console.log("chef, waiter , manager");
        
      }
   }
   catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' })
   }
})


module.exports = router