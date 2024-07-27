//Express is used for routing.
require('dotenv').config()

const express = require('express')
const app=express()
const port=4000

//array object
const githubData ={
    "login": "gaurav-aditya",
    "id": 110540811,
    "node_id": "U_kgDOBpa4Cw",
    "avatar_url": "https://avatars.githubusercontent.com/u/110540811?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gaurav-aditya",
    "html_url": "https://github.com/gaurav-aditya",
    "followers_url": "https://api.github.com/users/gaurav-aditya/followers",
    "following_url": "https://api.github.com/users/gaurav-aditya/following{/other_user}",
    "gists_url": "https://api.github.com/users/gaurav-aditya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gaurav-aditya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gaurav-aditya/subscriptions",
    "organizations_url": "https://api.github.com/users/gaurav-aditya/orgs",
    "repos_url": "https://api.github.com/users/gaurav-aditya/repos",
    "events_url": "https://api.github.com/users/gaurav-aditya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gaurav-aditya/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Aditya Prakash",
    "company": "@NIET Greater Noida",
    "blog": "https://gaurav-aditya.github.io",
    "location": "Knowledge park-ii Greater Noida",
    "email": null,
    "hireable": true,
    "bio": "Software Developer with a strong foundation in Computer Science Engineering and Artificial Intelligence, Currently working on Full Stack Development Technology.",
    "twitter_username": "Adityagaurav01",
    "public_repos": 38,
    "public_gists": 0,
    "followers": 16,
    "following": 10,
    "created_at": "2022-08-03T12:15:57Z",
    "updated_at": "2024-07-23T15:11:19Z"
  }

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

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
