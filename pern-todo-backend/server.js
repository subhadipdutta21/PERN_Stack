const express = require('express')
const cors = require('cors')
const todoRoute = require('./Routes/Todos')
const userRoute = require('./Routes/Users')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/docker', (req, res) => res.send('test docker app')) //just docker test

app.use('', userRoute)
app.use('/todos', todoRoute)

app.listen(5000, () => console.log('server running on port 5000'))

