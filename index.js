const express = require('express')
const format = require('date-format')

const app = express()

const PORT = 4000 || precess.env.PORT

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello Backend World</h1>")
})


app.get("/api/v1/instagram", (req, res) => {
    const instagramSocial = {
        userName: "captain.saleh",
        followers: 5200,
        follows: 1300,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    
    res.status(200).json({instagramSocial})
})

app.get("/api/v1/facebook", (req, res) => {
    const instagramSocial = {
        userName: "saleh_hadi",
        followers: 50,
        follows: 20,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    
    res.status(200).json(instagramSocial)
})

app.get("/api/v1/linkedin", (req, res) => {
    const instagramSocial = {
        userName: "saleh hadi",
        followers: 450,
        follows: 460,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }
    
    res.status(200).json(instagramSocial)
})


app.get("/api/v1/:userWritten",(req, res) => {
    console.log(req.params.userWritten)

    res.status(200).json({input: req.params.userWritten})
})

app.listen(PORT, ()=> {
    console.log(`service is running at ${PORT}`)
})