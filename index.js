const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config()
const cors = require('cors');

app.use(cors({
  origin: (origin, callback) => {
    if (
      !origin || // permitir peticiones sin origin (como en Postman)
      origin === 'https://dsantospascual.github.io' ||
      origin.startsWith('http://localhost')
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const routes = require ('./routes/routes');
app.use('/api', routes)

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})
