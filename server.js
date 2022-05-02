const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const bcrypt = require('bcrypt')
const uri = "mongodb+srv://smostafa:Darknight050812@cluster0.ui42t.mongodb.net/Signupdata?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const app = express()
app.use('/', express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())

app.post('/api/register', async(req, res) => {
    const {firstname, lastname, email, pass: plainTextPassword} = req.body
    
    if(!firstname || typeof firstname !== 'string'){
        return res.json({status: 'error', error: 'Invalid firstname' })
    }
    if(!lastname || typeof lastname !== 'string'){
        return res.json({status: 'error', error: 'Invalid lastname' })
    }
    if(!email || typeof email !== 'string'){
        return res.json({status: 'error', error: 'Invalid email' })
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status: 'error', error: 'Invalid password' })
    }

    if(plainTextPassword.length < 5){
        return res.json({
            status: 'error',
            error: 'Password too small, Should be atleast 6 characters'
        })
    }


    const pass = await bcrypt.hash(plainTextPassword, 10)
    
    try{
        const response = await User.create({
            firstname,
            lastname,
            email,
            pass
        })
        console.log('User created successfully: ', response)
    } catch(error) {
        if(error.code   === 11000){
            return res.json({status: 'error', error: 'Email is already registered'})
        }
        throw error
    }


    //console.log(await bcrypt.hash(password, 10))

    res.json({status: 'ok'})
})

app.listen(9999, () => {
    console.log('Server up at 9999')
})