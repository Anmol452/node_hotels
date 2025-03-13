const mongoose = require('mongoose')
require('dotenv').config()

// const mongoUrl = "mongodb://localhost:27017/hotels"

const mongoUrl = process.env.MONGODB_URL

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection

db.on('connected', ()=>{
    console.log('connected to MongoDB server');
})

db.on('disconnected', ()=>{
    console.log('server disconnected');
})

db.on('error', ()=>{
    console.error('MongoDB connection error: ' , error() );
})


// test only
module.export = db