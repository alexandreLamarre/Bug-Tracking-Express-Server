const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;
//TODO: store password as secret
const uri = "mongodb+srv://alexAdmin:Imsupercereal123@cluster0.8xoye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function setup(){
    try{
        await mongoose.connect(
            uri,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
        console.log("connected to database")
    } catch (e) {
        console.error(e)
    } finally{
        await mongoose.disconnect();
    }
}


module.exports = {
    setup: setup,
}