const express = require('express')

const Router = express.Router()

Router.get('/info', (req, res)=> {
  res.json({
    code: 200,
    msg: '没登录'
  })
})

module.exports = Router