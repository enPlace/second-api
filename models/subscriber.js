const mongoose = require('mongoose')
//create a schema/model for interacting with the DB

const subsciberSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    subscriberToChannel:{
        type: String,
        required: true 

    },
    subscribeDate:{
        type: Date, 
        required: true,
        default: Date.now

    }
})