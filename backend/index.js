require('dotenv').config()
const express = require('express')
const app= express()
const cors = require('cors')

//db connection
const connection = require('./db')
connection()

//routes
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
// const quizRoutes = require('./routes/quizzes')

app.use(express.json())
app.use(cors())


//routes
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
// app.use('/api/quizzes', quizRoutes)
// app.use('/api/scores', scoreRoutes)


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`listening on port ${port}`))
