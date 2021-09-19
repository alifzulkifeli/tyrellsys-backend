const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 8008;
const cardController = require('./controller/card')


app.use(cors({
  origin:"*",
}))


app.get('/getCardList/:num', cardController.shuffle);

app.get('/', function(req,res){
  return res.send("Yup, the endpoint is working!")
});

app.listen(PORT, () => {
  console.log(`Server running on the : ${PORT}`)
})





