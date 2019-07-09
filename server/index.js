const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; //update later

app.use(express.static(path.join(__dirname, '../client/dist')));
console.log(path.join(__dirname, '../client/dist'))
app.get('/', function(req, res){
  res.send()
})

app.listen(PORT, ()=>{
  console.log(`listening on port 3000`);
});