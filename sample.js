const exp       = require('constants');
const express   = require('express')
const app       = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('hello world thank you');
})

app.get('/test', (req, res) => {

    let jsonSample = {
        id : "1234",
        name : "유주현"
    }

    res.send(jsonSample);
})

app.post('/sendPost', (req, res) => {

    console.log('Recv data:', req.body)

    res.send("OK");
})

app.listen(3000, () => {
    console.log('sample server start')
})