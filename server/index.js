/*
** create by @d1y in 2019-10-22
*/

const express = require('express')
const App = express()

// router
const User = require('./router/user')

App.use('/user', User)

let PORT = 2334

App.listen(PORT, ()=> {
  console.log(`server run on localhost:${ PORT }`)
})
