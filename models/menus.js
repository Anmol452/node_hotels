const { type } = require('express/lib/response')
const mongoose = require('mongoose')


const menusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type : Number,
        required: true
    },
    taste: {
        type: String,
        enum : ['spicy', 'sour', 'sweet'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default :[]
        
    },
    num_sales: {
        type: String,
        default: 0
    }

})


const menus = mongoose.model('menus' , menusSchema)

module.exports = menus