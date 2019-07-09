const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const seed = require('./models/seed.js');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/menu').then(()=>console.log('db connected'));

const MenuItem = require('./models/MenuItem.js');

seed(MenuItem, {
  name: 'Burger',
  description: 'Cheesy',
  price: '$4.00',
  options: {
    cheese: 'extra',
    drink: 'coke',
    fries: 'large'
  }
})

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function(req, res){
  res.send()
})

app.listen(PORT, ()=>{
  console.log(`listening on port 3000`);
});