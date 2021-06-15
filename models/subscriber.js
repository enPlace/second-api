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

module.exports = mongoose.model('Subscriber', subsciberSchema)

//model() function takes two arguments: one is the name of the model, the other is the schema for the model. You'll use
//the model name  when importing in another module.