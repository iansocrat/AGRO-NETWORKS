// jshint esversion:6
// $("h1").css("color","red");

const https =require('node:https');
const bodyparser=require('body-parser');
const express=require("express");
const request=require("request");

const app=express();
app.use(express.static("public"));
app.use(express.static("webfil"))
app.use(bodyparser.urlencoded({extended:true})); 

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
  

   
});

// app.post("/",function(req,res){
//     const query=req.body.cityname;
//     const apikey="674ba80f7c1cf20b9a8c7d9d3ea10f83";
//     const unit= "metric"
//     const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
//     https.get(url,function(response){
//         console.log(response.statusCode);
//         response.on("data",function(data){
//         const weatherData=JSON.parse(data)
//         const temp=weatherData.main.temp;
//          const description=weatherData.weather[0].description;        
//          const icon=weatherData.weather[0].icon;
//          const imgurl="https://openweathermap.org/img/wn/"+icon+"@2x.png"
//         console.log(weatherData );
//         console.log(temp);
//         console.log(description);
//         res.write("<p>the tempetrature is "+ temp+"</p>");
//         res.write("<h1>the description is "+description+"</h1>");
//         res.write("<img src ="+imgurl+">") ;
//         res.send();

//         })


//     })
     
// })
    
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});



app.post("/",function(req,res){
    var firstname=req.body.fName;
    var lastName=req.body.lName;
    var email=req.body.email;
    console.log(firstname,lastName,email);

})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});


 


