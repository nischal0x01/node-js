const express = require("express")
const app = express()
const port = 3000
const data = {
    name: "Nischal",
    age:19
}


// type 1 (website endpoints)
app.get('/', (req,res)=>{
    res.send("<h1> hello world</h1>")
})

app.get('/dashboard', (req,res)=>{
    res.send("it's the dashboard")
})

// type 2 (API endpoints)
app.get("/api/data", (req,res)=>{
    res.send(data)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
