const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("Welcome to home page")
})
app.get("/about", (req, res) => {
     res.send("This is to about us page"+req.query.name+"age: "+req.query.age)
})
app.get("/profile", (req, res) => {
    res.send("profile page")
})
app.listen(3000, () => {
        console.log("Server started")
})
