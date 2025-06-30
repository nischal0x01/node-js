const express = require("express")
const app = express()
const port = 3000
const data = [
    {
    "name": "Nischal",
    "age":19
    },
]
   

app.use(express.json())

// type 1 (website endpoints)
app.get('/', (req,res)=>{
    res.send(`<body>
        <p>Data</p>
        ${JSON.stringify(data)}
        </body>`)
})

app.get('/dashboard', (req,res)=>{
    res.send("it's the dashboard")
})

// type 2 (API endpoints)
app.get("/api/data", (req,res)=>{
    res.send(data)
})

//adding data
app.post("/api/data", (req,res)=>{
    const newEntry = req.body
    data.push(newEntry)
    res.status(201).send(`Data added ${newEntry}`)
})

app.delete("/api/data", (req,res)=>{
    data.pop()
    console.log("Deleted teh data")
    res.sendStatus(300)
    
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
