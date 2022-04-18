const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const uri = "mongodb+srv://smostafa:Darknight050812@cluster0.ui42t.mongodb.net/Signupdata?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/register', async(req, res) => {
    console.log(req.body)
    res.json({status: 'ok'})
})

app.listen(9999, () => {
    console.log('Server up at 9999')
})