const express = require('express')

const bodyParser = require('body-parser')

const templatePath = require('path')

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({extended : false}))

app.get('/', (req, res) => {
    res.sendFile(templatePath.join(__dirname + '/home.html'))
})

app.get('/bmicalculator', (req, res)=>{res.sendFile(templatePath.join(__dirname + '/bmi.html'))})

app.listen(port, () => console.log(`Listening port in http://localhost:${port}/`))