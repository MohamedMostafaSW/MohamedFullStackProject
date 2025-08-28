import express from "express";
const app= express();

app.set("view engine", "ejs");

app.get("/" , (req,res) =>{

    const today = new Date();
    const day = today.getDay();

    let message="";

    if (day >=0 && day<=4) {
     message = "Hey, it is a weekday — it's time to work hard!";
    } else {
     message = "Hey, it is a Weekend — it's time to have fun!";
    }


    res.render("index", {message: message});
});

app.listen(3000,() =>{
    console.log("server running");
});

