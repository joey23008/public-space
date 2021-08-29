const express = require('express')
const app = express()

app.get("/getSampleJson", (req, res, next) => {
  // アクセスログ
  console.log(req.method, req.url) 
  // jsonを返す
  res.json(require('../json/sample.json'))
});

app.get("/getSamplePostJson", (req, res, next) => {
  // アクセスログ
  console.log(req.method, req.url) 
  // jsonを返す
  res.json(require('../json/samplePost.json'))
});

app.use((err, req, res, next) => {
  console.log(err)
  next()
});

module.exports = app