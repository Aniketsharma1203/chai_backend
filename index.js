require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/love', (req, res) =>  {
    res.send('Take Care bro!')
})

app.get('/chai', (req, res) => {
    res.send('<h1>Chai is life!</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})