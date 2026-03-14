import express from 'express'
import path from "path"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT =  process.env.PORT ?? 8080 

app.get("/", (req, res) => {
    res.send("Welcome from node js server")
})

app.get("/game", (req, res) => {
    res.sendFile(path.join(__dirname, "ChoiceGame.html"))
})

app.get("/health", (req, res) => {
    res.send("Server is Up and Running, its Healty... you are fine")
})

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})

