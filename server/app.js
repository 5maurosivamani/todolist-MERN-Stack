const express = require("express")
const cors = require("cors")

const bodyParser = require('body-parser')
const app = express()

const port = 5000

require("./models/db")

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

const router = require("./routes/router") 
app.use("/", router)



app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Sever running on Port ${port}.`);
})