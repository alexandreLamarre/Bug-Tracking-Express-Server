const config = require("./app/config/auth-config.js");
const {setup} = require("./app/db/setup.js");
const userRouter = require("./app/db/routes/userRoutes.js");

const {v4: uuidv4} = require("uuid")
const express = require("express");
const cors = require("cors");
const port = 8080;

var corsOptions = {
    origin: "http://localhost:3000"
};

const app = express();
app.use(cors(corsOptions));
setup().catch(console.error);

app.use(userRouter);

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