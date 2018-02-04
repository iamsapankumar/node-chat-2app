const express = require('express')
const path = require('path')


const publicPath = path.join(__dirname,'../public')
const app = express()
app.use (express.static(publicPath))

const port =process.env.PORT || 3000
/* Listening on request*/
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})