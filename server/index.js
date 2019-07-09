const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/menu', { useNewUrlParser: true }).then(()=>console.log('db connected'));

const MenuItem = require('./models/MenuItem.js');


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function(req, res){
  res.send()
})
app.get('/api/menu', (req,res) => {
  MenuItem.getMenu().then((data)=>res.send(data))
})

app.listen(PORT, ()=>{
  console.log(`listening on port 3000`);
});