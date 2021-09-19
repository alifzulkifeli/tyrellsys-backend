const express = require('express')
const app = express()
const PORT = process.env.PORT || 8008;


const cardController = require('./controller/card')

app.get('/getCardList/:num', cardController.shuffle);

app.get('/', function(req,res){
  return res.send("Yup, the endpoint is working!")
});

app.listen(port, () => {
  console.log(`Server running on the : ${port}`)
})





