const { request, response } = require('express');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.listen(3000,function(){
    console.log("The server has started.")
});
app.get("/",function(request, response){
    console.log(__dirname);
    response.sendFile(__dirname + "/index.html");
});




app.get("/bmi", function(request,resopnse){
    resopnse.sendFile(__dirname + "/bmi.html")

});




app.post("/bmi",function(request,resopnse){
    var height = Number(request.body.height);
    var heightsquare = height * height;
    var mass = Number(request.body.mass);
    var BMI = mass/heightsquare; 
    resopnse.send("The BMI is: "+BMI)
})

app.post("/",function(request,resopnse){


    var number1 = Number(request.body.num1);
    var number2 = Number(request.body.num2);
    let result = number1 + number2;
    console.log(request.body.num1 + request.body.num2);
    resopnse.send("Thanks for posting. Your answer is: "+ result +".");
})