const express = require('express')

const bodyParser = require('body-parser')

const templatePath = require('path')

const app = express()

const port = 3000

// app.set('view engine', 'ejs');
// app.set('views', templatePath.join(__dirname, 'views')); // Assuming your EJS files will be in a 'views' folder


app.use(bodyParser.urlencoded({extended : false}))

app.use(express.static('public')); // assuming your static files are in a 'public' folder


app.get('/', (req, res) => {
    res.sendFile(templatePath.join(__dirname + '/home.html'))
})

app.get('/bmicalculator', (req, res)=>{res.sendFile(templatePath.join(__dirname + '/bmi.html'))})


app.post('/bmicalculator', (req, res) => {
    let age = req.body.inputAge;
    let height = req.body.inputHeight;
    let weight = req.body.inputWeight;
    let unit = String(req.body.height);
    let result;
    if (unit == "(cm)") {
        result = calculateBMIMetric(weight, height);
    } else {
        result = calculateBMIImperial(weight, height);
    }
    //  res.send(String(result))
});


function calculateBMIMetric(weight, height) {
    return weight / ((height / 100) ** 2);
}

function calculateBMIImperial(weight, height) {
    return (703 * weight) / (height ** 2);
}

app.listen(port, () => console.log(`Listening port in http://localhost:${port}/`))