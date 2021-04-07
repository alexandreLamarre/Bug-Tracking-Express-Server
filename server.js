const {v4: uuidv4} = require("uuid")
const express = require("express");
const cors = require("cors");
const port = 8080;

const app = express();
app.use(cors());

app.listen(port, () => {
    console.log('Listening at http://localhost:' + port);
})

app.get("/login", (req, res) => {
    //TODO: authenticate credentials from MongoDb cluster

    res.send({
        token: ""
    })
});

app.post("/register", (req, res) => {
    //TODO: check if credentials exist in mongoDb cluster
    //if they do return an error:

    //if not, post the credentials and token to mongodb cluster

    const token = uuidv4();

    res.send({
        token: token,
    });
})