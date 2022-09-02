const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb://localhost:27017/toDoListFullStact", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("Database connected Successfully.");
})

require("./models")