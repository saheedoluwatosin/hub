import express from "express"
import cors from "cors"
import { prisma } from "./util/db"

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000

app.listen(PORT,()=>{
    console.log("Server is Running ")
})

prisma.$connect();
    console.log("Connected to the database successfully!");