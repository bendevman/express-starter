const path = require('path')
const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get("/",(req,res)=>{
  console.log('hi')
  res.render('index')
})

app.listen(process.env.PORT || 3000)