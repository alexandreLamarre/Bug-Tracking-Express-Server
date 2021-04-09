const express = require("express");
const userModel = require("../models/user.js");
const app = express();

app.post("/user", async(req, resp) =>{
    const user = new userModel(req.body);
    try{
        await user.save();
        resp.send(user);
    } catch(e) {
        resp.status(500).send(e);
    }
})

app.patch("/user/:id", async (req, resp) => {
    try{
        await userModel.findByIdAndUpdate(req.params.id, req.body)
        await userModel.save();
        resp.send(user);
    } catch(e) {
        resp.status(500).send(e);
    }
})

app.get("/users", async (req, resp) => {
    const users = await userModel.find({});

    try {
        resp.send(users);
    } catch(e){
        resp.status(500).send(e);
    }
});

module.exports = app;