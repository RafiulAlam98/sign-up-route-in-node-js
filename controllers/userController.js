const registerValidator = require('../validator/registerValidator')
const User = require ('../model/User.js')
const bcrypt = require('bcrypt');

// login controller
module.exports = {
     login(req,res){
          let name = req.body.name
          let email = req.body.email
      res.json({
           message:`welcome ${name} we will contact with you by ${email}`
      })
     
     },
     register(req,res){
          let {name,email,password,confirmPassword} = req.body 
          let validate = registerValidator({name,email,password,confirmPassword})
          if (!validate.isValid){
               res.status(400).json(validate.error)
          }
          else{
               console.log(email)
               User.findOne({email})
               .then(user =>{
                    console.log(user)
                    if(user){
                         return res.status(400).json({
                              message:"Email Already Exists."
                         })
                    }

                    bcrypt.hash(password, 11, (err,hash)=>{
                         if(err) {
                              return res.status(500).json({
                                   message:"Server Error Occured"
                              })
                         }

                         let user = new User({
                              name,
                              email,
                              password:hash
                         })

                         user.save()
                         .then(user => {
                              res.status(201).json({
                                   message:`Welcome ${user?.email}`
                                   
                              })
                         })
                         .catch(error => {
                              console.log(error)
                              res.status(500).json()
                         })
                    })
                    
               })
               .catch(error => {
                    console.log(error)
                    res.status(500).json()
               })
          }
     }
}


          // read data
          // validate data
          // check for duplicate user
          // new user object
          // save to database
          // response back with new data