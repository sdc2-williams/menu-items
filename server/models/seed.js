const mongoose = require('mongoose');
const MenuItem = require('./MenuItem.js');

mongoose.connect('mongodb://localhost/menu', { useNewUrlParser: true }).then(()=>console.log('db connected'));

const seeds = [
  new MenuItem({
    name: 'Burger',
    description: 'Cheesy',
    price: '$4.00',
    options: {
      cheese: 'extra',
      drink: 'coke',
      fries: 'large'
    }
  }),
  new MenuItem({
    name: 'Chicken Sandwich',
    description: 'Crispy',
    price: '$5.00',
    options: {
      cheese: 'none',
      drink: 'coke',
      fries: 'large'
    }
  })
]

const seed = function (models, cb) {
  for (model of models) {
    model.save(cb)
  }
}

seed(seeds, function(err, res) {
  if(!err){
    console.log(res)
  }else{
    console.error(err)
  }
})


