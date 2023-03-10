const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("mantap")
})
app.post("/", (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

app.listen(port, () => console.log(`Server berjalan di port: ${port}`))