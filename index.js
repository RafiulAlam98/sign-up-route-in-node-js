const express = require('express')
const app = express()
const cors = require('cors')
var morgan = require('morgan')
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
var bodyParser = require('body-parser')
const userRouter = require('./routers/userRoute')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/users', userRouter)


app.get('/', (req, res) => {
  res.send('hello people')
})

app.listen(port, () => {
  console.log(`listnening at port ${port}` )
  mongoose.connect('mongodb://localhost:27017/test',
  {useNewUrlParser:true},
  ()=>{
    console.log('database connected...')
  });
})