
const express = require('express')
const format = require('date-format');
const app = express()

// swagger docs related 

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).send("<h1>Hello World!</h1>")
})

app.get('/api/v1/instagram', (req, res) => {
    const data = {
        usename: "captain__saleh",
        followers: 5760,
        follows: 1350,
        date: format.asString('dd[MM] - hh:mm:ss', new Date())
    }

    res.status(200).json(data)
})

app.get('/api/v1/facebook', (req, res) => {
    const data = {
        usename: "saleh aburah",
        followers: 760,
        follows: 350,
        date: format.asString('dd[MM] - hh:mm:ss', new Date())
    }

    res.status(200).json(data)
})

app.get('/api/v1/linkedin', (req, res) => {
    const data = {
        usename: "captain__saleh",
        followers: 560,
        follows: 550,
        date: format.asString('dd[MM] - hh:mm:ss', new Date())
    }

    res.status(200).json(data)
})

app.get('/api/v1/:anything', (req, res) => {
    console.log(req.params.anything)
    res.status(200).json({param: req.params.anything})
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})