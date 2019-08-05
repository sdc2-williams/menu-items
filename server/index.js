/* eslint-disable radix */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

//mongoose.connect('mongodb://localhost/menu', { useNewUrlParser: true }).then(() => console.log('db connected'));

const MenuItem = require('./models/MenuItemSQL.js');

//app.use('/:menu', express.static(path.join(__dirname, '../client/dist')));
//app.use(parser.json());
//app.use(parser.urlencoded({ extended: false }));

app.use(express.static((`${__dirname}/../client/dist`)));
app.use('/:menu', express.static((`${__dirname}/../client/dist`)));
app.use(express.json());



app.get('/api/menu/:menu', function (req, res) {
  let menu = parseInt(req.params.menu);
   MenuItem.getMenu(menu, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data ) ;
    }
  });

});

app.get('/api/menu', function (req, res) {
     MenuItem.getAllMenus((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data ) ;
      }
    });
});

app.post('/api/menu/', function (req, res) {
    MenuItem.createMenu(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data ) ;
      }
    });
  });


/*app.get('/api/menu/:name', function (req, res) {
  const name = req.params.name;
     MenuItem.getMenuByName({ name })
    .then(data => res.status(202).send(data))
    .catch(err => console.log(`API Error:${err}`));
 });
 */

app.put('/api/menu/:id', function (req, res) {
  const id = req.params.id;
  MenuItem.updateMenu(req.body, id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data ) ;
    }
  });
});

app.delete('/api/menu/:menu', function (req, res) {
  const menu = parseInt(req.params.menu);
  MenuItem.deleteMenu(menu, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data ) ;
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
