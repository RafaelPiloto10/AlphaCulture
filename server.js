const port = 3000

const express = require('express')
const app = express()

app.use(express.static("public"))

app.get("/language", function(req, res){
    res.send("language/")
})

app.get("/music", function(req, res){
    res.send("music/")
})

app.get("/religion", function(req, res){
    res.send("religion/")
})

app.get("/music", function(req, res){
    res.send("music/")
})

app.get("/about", function(req, res){
    res.send("about/")
})

app.get("/symbol", function(req, res){
    res.send("symbol/")
})


app.get("/economy", function(req, res){
    res.send("economy/")
})

app.get("/politics", function(req, res){
    res.send("politics/")
})

app.get("/education", function(req, res){
    res.send("education/")
})

app.get("/sport", function(req, res){
    res.send("sport/")
})

let server = app.listen(port, () => {
    console.log("Example app listening at http://" + server.address().address + ":" + server.address().port)

})

