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


app.post('/bmicalculator', (req, res)=>{
    let age = req.body.inputAge
    let height = req.body.inputHeight
    let weight = req.body.inputWeight
    console.log(age)

})

function calculateBMIMetric(){

}

function calculateBMIImperial(){

}

app.listen(port, () => console.log(`Listening port in http://localhost:${port}/`))