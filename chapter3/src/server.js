import express from 'express';
import authRoutes from './route/authRoutes.js'

const app = express()
app.use ('/auth', authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})