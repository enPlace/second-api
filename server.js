const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true, useUnifiedTopology: true  })

app.listen(5000, (req, res)=>{
    console.log("server listening on port 5000...")
})

