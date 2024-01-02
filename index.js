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


function calculateBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

app.post('/bmicalculator', (req, res) => {
    let age = req.body.inputAge;
    let height = req.body.inputHeight;
    let weight = req.body.inputWeight;
    let unit = String(req.body.height);
    let bmi;
    if (unit == "(cm)") {
        bmi = calculateBMIMetric(weight, height);
    } else {
        bmi = calculateBMIImperial(weight, height);
    }
    let category = calculateBMICategory(bmi);
    res.send({ bmi: bmi.toFixed(2), category: category });
});



function calculateBMIMetric(weight, height) {
    return weight / ((height / 100) ** 2);
}

function calculateBMIImperial(weight, height) {
    return (703 * weight) / (height ** 2);
}

app.listen(port, () => console.log(`Listening port in http://localhost:${port}/`))