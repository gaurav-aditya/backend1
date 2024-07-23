require('dotenv').config()

const express = require('express')
const app=express()
const port=4000
app.get('/',(req,res) => {
    res.send('Hi Aditya welcome to the world of backend')
})

app.get('/twitter',(req,res) =>{
    res.send('adityagaurav01')
})

app.get('/login',(req,res) => {
    res.send('<h1>Welcome to echoaditya website</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>AAiye aapka intejaar tha</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})