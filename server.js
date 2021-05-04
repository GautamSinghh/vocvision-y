const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs');
const Register = require('./models/register')
;
const port = process.env.PORT || 1000;
const bodyParser = require('body-parser');

// console.log(path.join(__dirname, "./public"))

app.use(express.static('public'));
app.use(express.json());
const connectDB = require('./db/conn');

// temlplate .
app.set('views',path.join(__dirname, './views')); 
app.set('view engine', 'hbs')


// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

app.get('/', function(req, res) {
  res.render('home')
});

app.get('/login', function(req, res) {
   res.render('index')
  });

  // login chack
  app.post('/login', async (req,res) =>{
    // console.log(req);
    try{
const email = req.body.email;
const password = req.body.password;

console.log(`${email} and password is ${password}`)
    }catch (error) {
res.status(400).send("invalid Emil")
    }
  })


app.listen(port , (req,res) =>{
    console.log(`port is worling on ${port}`);
})
