const express = require("express")

const Task = require("../models/models")

const router = express.Router()

router.get("/api/tasks", (req, res)=>{
    Task.find({}, (err, foundDocs)=>{
        res.json(foundDocs)
    })
    
})

router.post("/api/tasks", (req, res)=>{
    const newTask = new Task(req.body)

    newTask.save((err, insDoc) => {
        if(err) {
            console.log(err);
        } else {
            res.json(insDoc)
        }
    })
})

router.put("/api/tasks/:id", (req, res) => {
    Task.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err, updDoc) => {
        if(err) console.log(err);
        res.json(updDoc)
    })
})

router.delete("/api/tasks/:id", (req, res) => {
    Task.findOneAndDelete({_id: req.params.id}, (err, delDoc) => {
        if(err) console.log(err);
        res.json(delDoc)
    })
})

module.exports = router