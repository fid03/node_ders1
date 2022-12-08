const express = require('express')

const app = express() //serverin baslama noqtesi

app.get('/', (req, res) => {
    res.send("Server response on / route")
})

app.get('/test', (req, res) => {
    let obj = {
        name: 'admin',
        user: 'admin',
        id: 1,
        test: false
    }
    res.json(obj)
})

app.get('/employees', (req, res) => {
    let array = [
        {
            id: 1,
            age: 22,
            name: "Jack"
        },
        {
            id: 2,
            age: 25,
            name: "Anne"
        },
        {
            id: 3,
            age: 21,
            name: "Dave"
        }
    ]
    res.json(array)
})

app.listen(3000, () => {
    console.log("Server started on 3000 port")
})