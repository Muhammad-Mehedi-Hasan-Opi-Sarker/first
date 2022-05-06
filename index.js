const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
// app.use(bodyParser.json()

const app =  express()

const port = process.env.PORT ||5000;

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Server Running . This is a auto generators .')
})

const name=[
    {id:1,name:'Modhu',email: 'email@fdkk.com'},
    {id:2,name:'Kodu',email:'email@fdkk.com'},
    {id:3,name:'Liton',email:'email@fdkk.com'},
    {id:4,name:'Gupto',email:'email@fdkk.com'},
    {id:5,name:'Shina',email:'email@fdkk.com'}
]


app.get('/users',(req,res)=>{
    console.log('query', req.query);
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = name.filter(user=>user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(name)
    }
   
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = name.length+1;
    name.push(user);
    res.send(user);
  })

app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    const user = name.find(u=>u.id==id);
    res.send(user)
})

app.listen(port, ()=>{
    console.log(`Yes, connected${port}`)
})