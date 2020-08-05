const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const logger = require('./utils/logger')
const config = require('./utils/config')
const blogRouter = require('./controllers/blog')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
