const mongoose = require('mongoose');
const { Schema } = mongoose;


const userScehma = new Schema({
     name: {
          type:String,
          required:true,
          trim:true 
     },
     email:{
          type:String,
          required:true
     },
     password:{
          type:String,
          required:true
     }
})

const User = mongoose.model('User',userScehma)
module.exports = User