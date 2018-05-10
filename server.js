const port = 3000

const express = require('express')
const app = express()

app.use(express.static("public"))

app.get("/language", function(req, res){
    res.send("language/")
})

let server = app.listen(port, () => {
    console.log("Example app listening at http://" + server.address().address + ":" + server.address().port)

})

