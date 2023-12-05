const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

const port = process.env.PORT || 5000
const categories = require('./data/categories.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon News is running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon news app server is running on port ${port}`);
})