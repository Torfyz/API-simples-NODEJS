import express from "express";
import mongoose from "mongoose";

import User from './models/user.js' 

const app = express();

app.use(express.json());

// const users = [];

app.get("/users",async (req, res) =>{
    const users = await User.find()

    return res.json(users);
});

app.post("/users",async (req,res)=>{
    const user = req.body

    const novoUsuario = await User.create(user)

    return res.json(novoUsuario)
})

mongoose.connect('mongodb+srv://JORGE:IEqxMsbpp3zmL6k6@users.eex4ctv.mongodb.net/Users?retryWrites=true&w=majority&appName=Users')
.then( ()=> console.log("MongoDB conectado"))
.catch( ()=> console.log("MongoDB não conectado"))

app.listen(3000);