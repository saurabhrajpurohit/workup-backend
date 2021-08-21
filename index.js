const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const airbnb = require("./routes/airbnb");
require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/airbnb", airbnb)

var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})
