const mongoose = require('mongoose');
const MenuDB = require('./MenuItem.js');

mongoose.connect('mongodb://localhost/menu', { useNewUrlParser: true }).then(()=>console.log('db connected'));

/* Menu Names */
const menuNames = ['Burger', 'Chicken', 'Cheese', 'Nuggets', 'Sandwich', 'Big', 'Double', 'Triple', 'Mac', 'Swiss', 'BBQ', 'SweetNSour', 'Bacon', 'Chocolate', 'Spicy', 'Vanilla', 'Hot', 'Fish', 'Filet', 'Hotcakes', 'Muffin', 'Sausage', 'Tenders', 'Burrito', 'Strawberry', 'Egg', 'Parfait', 'Grand', 'Deluxe']

/* Description Words */
const descriptionWords = ['Briny', 'Bitter', 'Bittersweet', 'Cooling', 'Acidic', 'Earthy', 'Fiery', 'Full-bodied', 'Herbal', 'Fresh', 'Robust', 'Spicy', 'Sweet', 'Tart', 'Airy', 'Buttery', 'Crunchy', 'Delicate', 'Crusty', 'Gooey', 'Juicy', 'Smooth', 'Velverty', 'Succulent', 'Baked', 'Braised', 'Caramelized', 'Charred', 'Fried', 'Roasted', 'Sauteed', 'Smoked', 'Aroma', 'Bold', 'Candied', 'Filled', 'Cheesy', 'Salty', 'Delicious', 'Garlicky', 'Glazed', 'HOT', 'Low-Fat', 'Luscious', 'Oniony', 'Peppery', 'Sizzling', 'Tender', 'Zesty']

/* Possible Options */
const possibleOptions = ['Large Fry', 'Small Fry', 'Coke', 'Diet Coke', 'Orange Soda', 'Grape Soda', 'Small Cone', 'Cookie', 'Extra Onions', 'Extra Cheese', 'No Pickles', 'No Tomatoes', 'No Onions', 'No Cheese', 'Hashbrown', 'Extra Mayo', 'No Mustard', 'Milk', 'Coffee', 'Apple Slices', 'Ranch', 'BBQ Sauce', 'Honey Mustard', 'Apple Juice', 'Salad', 'Salt', 'Pepper', 'Ketchup', 'Mayo', 'McFlurry', 'Fruit Salad', 'Salad Dressing']

/* Random Number */
function getRandomInt(max) {
  return Math.floor(Math.random()*Math.floor(max));
}

/* Random Menu Item Option Object */
function getRandomMenuItemOptions() {
  let results = {};
  for (let i = 0; i <= 6; i++){
    randomOption = possibleOptions[getRandomInt(32)];
    results[randomOption] = false;
  }
  return results;
}

/* Random Description */
function getRandomDescription(){
  let result = '';
  for (let i = 0; i <= getRandomInt(8); i++){
    result += " " + descriptionWords[getRandomInt(descriptionWords.length)]
  }
  return result;
}

/* Random Menu Item */
function getRandomMenuItem(){
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += " " + menuNames[getRandomInt(menuNames.length)]
  }
  return result;
}

/* Random Price */
function getRandomPrice(){
  let result = '$'+ getRandomInt(15) + '.'+ getRandomInt(9) + getRandomInt(9)
  return result;
}

/* New Menu Item */
const randomItem = (Model) => {
  return new Model({
    name: getRandomMenuItem(),
    description: getRandomDescription(),
    price: getRandomPrice(),
    options: getRandomMenuItemOptions()
  })
}

/* Seed Function */
function seed(models, cb){
  for(let i in models){
      const prom = models[i].save(cb)
      if(i == models.length){
          prom.then(function(err){
              process.exit(err ? 0:1)
          })
      }
  }
}

function generateRandom(n, Model){
  const models = []
  for(let i =0; i<n; i++){
    models.push(randomItem(Model))
  }
  return(models)
}

seed(generateRandom(100, MenuDB.MenuItem),
  function(err, res){
    if(!err){
      console.log(res)
    }else{
      console.error(err)
    }

  }
)


