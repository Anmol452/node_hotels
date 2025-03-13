const mongoose = require('mongoose')

const mongoUrl = "mongodb://localhost:27017/hotels"

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