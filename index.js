const express = require('express');
const movies = require('./routes/movies')

const app = express()
const port = 3001

app.use(express.json())

const validApiKey = "5"

const authenticateApiKey = (req, res, next) => {
    const apiKey = req.query.apiKey
    console.log(req.query)

    if(!apiKey) {
        return res
        .status(401)
        .json({message: "No valid api key was found."})
    }

    if(validApiKey !== apiKey) {
        return res
        .status(403)
        .json({ message: "Invalid API Key!"})
    }

    next()
}

app.use((req, res, next) => {
    authenticateApiKey(req, res, next)
    next()
})

app.get("/", (req, res) => {
    res.send('This is an express example')
})

app.use("/movies", movies)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})