const express = require('express');
const chalk = import('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const form = require('./models/form')

mongoose.connect('mongodb://localhost/form', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res) {
  res.render('form');
})

app.get('/result', (req,res)=> {
  res.render('result');
});

app.post('/',function (req,res) {
  let username=req.body.username;
  let email=req.body.email;
  let f={username: username,email:email};
})


// const PORT = process.env.PORT || 3000;
// const app = express();
// Instance of express

// app.use(morgan('tiny'));
// Use 'combined' for longer morgan report. Or 'tiny' for abbreviated.
// app.use(express.static(path.join(__dirname, '/public/')));
// This will look for static files in public folder
// use is middleware


// app.set('views', './src/views');
// app.set('view engine', 'ejs');

// app.get('/', (req, res)=> {
//   res.render('index', {title: 'Globomantics', data: ['a', 'b', 'c']});
// })
// Whenever a get is sent to slash, express will send back this text.

// app.listen(3000, () => {
//   debug(`listening on port ${(PORT)}`);
// })

