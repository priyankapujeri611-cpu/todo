import express from "express";
import router 

const app = express();

function print () =>{
    console.log("The Backend server running on port 5001")
}

app.get("/demo-url, (req,res") =>{
 res.status(200).send("You are seeing this msg on browser or client")   
});

app.listen(5001, print());
//.listen(port number, a function call)



app.listen(5002, () => {
  console.log("The Backend server running on port 5002")
})





