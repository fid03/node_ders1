const express = require('express')

const app = express() //serverin baslama noqtesi

app.get('/', (req, res) => {
    res.send("Server response on / route")
})

app.get('/user/:id', (req, res) => {
   const arr=[{id:1,name:'ted'},{id:2,name:'jhon'},{id:3,name:'therson'}]

   const user=arr.find(el=>el.id==req.params.id)
   if(user){
    
   }

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