import express from "express";
import { getF } from controller
const controller = express.Router();


Router.get("/", (req,res) =>{
    res.status(200).send("You are seeing this msg on browser")
})




export defaulter Router;