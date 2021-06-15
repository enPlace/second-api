const express = require('express')
const router = express.Router()

//Get for entire resource
router.get('/',(req, res)=>{
    res.send('Hello World')
}); 

//get for single user
router.get('/:id', (req, res)=>{
    res.send(req.params.id)

}); 

//create a user on the resource
router.post('/', (req, res)=>{

})

//update user info 
router.patch('/:id', (req,res)=>{
    

})

//delete
router.delete('/:id', (req, res)=>{

})



module.exports = router