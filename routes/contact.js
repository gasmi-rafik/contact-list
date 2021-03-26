const express = require ('express')
const router = express.Router()
const Contact = require('../model/Contact')

//test
router.get("/gettest" , (req , res)=>{
    res.send('hello')
})

// add user 

router.post('/adduser' , (req , res)=>{
    const {name , email , phone } = req.body
    const newContact = new Contact({
        name , phone , email
    })
    newContact.save()
    .then(contact =>res.send(contact))
    .catch(err=> console.log(err))
})


// get user

router.get('/getuser' , (req , res)=>{
    Contact.find()
    .then(contact =>res.send(contact))
    .catch(err=> console.log(err))
})

//remove user

router.delete('/deleteuser/:_id' , (req , res)=>{
   const {_id} =  req.params 

   Contact.deleteOne({_id})
   .then(contact =>res.send(contact))
   .catch(err=> console.log(err))

})

// update user 

router.put('/updateuser/:_id' ,(req , res)=>{
    const {_id}= req.params
    const {name , email , phone } = req.body
    Contact.findOneAndUpdate({_id} , {$set:{name , email , phone}})



    .then(contact =>res.send(contact))
   .catch(err=> console.log(err))
})

module.exports= router