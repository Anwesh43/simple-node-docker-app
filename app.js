const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send("hello world")
})

app.get('/hello/:name/:age', (req, res) => {
    const {name, age} = req.params
    res.send(`hello ${name} ${age}`)
})

app.listen(8080, () => {
    console.log("listening on 8080");
})
