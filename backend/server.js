const express = require('express')
, products = require('./data/products')
, dotenv = require('dotenv')
, connectDB = require('./config/db')
, colors = require('colors')

dotenv.config()

//db connect
connectDB()

const app = express()


app.get('/api/products', (req, res) => res.json(products))

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)

  res.json(product)
})

 const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))