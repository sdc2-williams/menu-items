const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/menu', { useNewUrlParser: true }).then(() => console.log('db connected'));

const MenuItem = require('./models/MenuItem.js');


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.json());

app.get('/', (req, res) => {
  res.send();
});
app.get('/api/menu', (req, res) => {
  MenuItem.getMenu({}).then(data => res.status(202).send(data)).catch(err => console.log(`API Error:${err}`));
});

// app.get('/api/menu/dinner', (req, res) => {
//   MenuItem.getMenu().then(data => res.status(202).send(data)).catch(err => console.log(`API Error:${err}`));
// });

// app.get('/api/menu/popular', (req, res) => {
//   MenuItem.getMenu().then(data => res.status(202).send(data)).catch(err => console.log(`API Error:${err}`));
// });

app.listen(PORT, () => {
  console.log('listening on port 3000');
});
