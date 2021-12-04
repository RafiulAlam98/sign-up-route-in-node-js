const validator = require ('validator')

const validate = user =>{
     let error =  {}
     if(!user.name){
          error.name = "Please provide your name"
     }

     if(!user.email){
          error.email = "Please provide your email"
     }
     else if(!validator.isEmail(user.email)){
          error.email = "Please Provide a valid Email"
     }

     if(!user.password){
          error.password = "Please Provide a password"
     }
     else if(user.password.length < 6){
          error.password = "Password Must be greater or equal 6 character"
     }

     if(!user.confirmPassword){
          error.confirmPassword = "Please Provide confirmation password"
     }
     else if(user.password != user.confirmPassword){
          error.confirmPassword = "Password does not match"
     }

     return{
          error,
          isValid:Object.keys(error).length === 0
     }
}

module.exports = validate