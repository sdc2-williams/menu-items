const async = require('async');
const mongoose = require('mongoose');
const MenuDB = require('./MenuItem.js');

mongoose.connect('mongodb://localhost/menu', { useNewUrlParser: true }).then(() => console.log('db connected'));

/* Menu Names */
const menus = Array.from({ length: 100 }, (e, i) => i + 1);
const categories = [1, 2, 3];

const menuNames = ['Burger', 'Chicken', 'Cheese', 'Nuggets', 'Sandwich', 'Big', 'Double', 'Triple', 'Mac', 'Swiss', 'BBQ', 'SweetNSour', 'Bacon', 'Chocolate', 'Spicy', 'Vanilla', 'Hot', 'Fish', 'Filet', 'Hotcakes', 'Muffin', 'Sausage', 'Tenders', 'Burrito', 'Strawberry', 'Egg', 'Parfait', 'Grand', 'Deluxe'];

/* Description Words */
const descriptionWords = ['Briny', 'Bitter', 'Bittersweet', 'Cooling', 'Acidic', 'Earthy', 'Fiery', 'Full-bodied', 'Herbal', 'Fresh', 'Robust', 'Spicy', 'Sweet', 'Tart', 'Airy', 'Buttery', 'Crunchy', 'Delicate', 'Crusty', 'Gooey', 'Juicy', 'Smooth', 'Velverty', 'Succulent', 'Baked', 'Braised', 'Caramelized', 'Charred', 'Fried', 'Roasted', 'Sauteed', 'Smoked', 'Aroma', 'Bold', 'Candied', 'Filled', 'Cheesy', 'Salty', 'Delicious', 'Garlicky', 'Glazed', 'HOT', 'Low-Fat', 'Luscious', 'Oniony', 'Peppery', 'Sizzling', 'Tender', 'Zesty'];

/* Possible Options */
const possibleOptions = ['Large Fry', 'Small Fry', 'Coke', 'Diet Coke', 'Orange Soda', 'Grape Soda', 'Small Cone', 'Cookie', 'Extra Onions', 'Extra Cheese', 'No Pickles', 'No Tomatoes', 'No Onions', 'No Cheese', 'Hashbrown', 'Extra Mayo', 'No Mustard', 'Milk', 'Coffee', 'Apple Slices', 'Ranch', 'BBQ Sauce', 'Honey Mustard', 'Apple Juice', 'Salad', 'Salt', 'Pepper', 'Ketchup', 'Mayo', 'McFlurry', 'Fruit Salad', 'Salad Dressing'];

/* Random Number */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* Random Menu Item Option Object */
function getRandomMenuItemOptions() {
  const results = {};
  for (let i = 0; i <= 6; i++) {
    randomOption = possibleOptions[getRandomInt(32)];
    results[randomOption] = false;
  }
  return results;
}

/* Random Description */
function getRandomDescription() {
  let result = '';
  for (let i = 0; i <= getRandomInt(8); i++) {
    result += ` ${descriptionWords[getRandomInt(descriptionWords.length)]}`;
  }
  return result;
}

/* Random Menu Item */
function getRandomMenuItem() {
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += ` ${menuNames[getRandomInt(menuNames.length)]}`;
  }
  return result;
}

/* Random Price */
function getRandomPrice() {
  const result = `${getRandomInt(15)}.${getRandomInt(9)}${getRandomInt(9)}`;
  return result;
}

/* New Menu Item*/
const randomItem = Model => new Model({
  name: getRandomMenuItem(),
  description: getRandomDescription(),
  price: getRandomPrice(),
  options: getRandomMenuItemOptions(),
});

function seed(n, Model){
  // Seed a specified collection with N documents
  // @param n <Number> The total number of documents to seed
  // @param Model <mongoose.Model> The collection to seed
  const menus = Array.from({length: n}, function(e,i){ return(i+1) })
  return new Promise(function(resolve, reject){
    async.eachSeries(menus, function(m, done){
      const model = randomItem(Model)
      model.save(function(){
        done()
      })
    }, function(err, result){
      err ? reject(err) : resolve(result)
    })
  })

}

function * categoryGenerator(categories){
  // Sequentially return a single element from an array
  // @param categories <Array> Spellec with an 'e' and not an 'a'
  // @example g = categoryGenerator([1,2,3]); g.next().value; // 1
  while(true){
    yield * categories
  }
}

function seedMenus(n, p, menus, categories, Model) {
  // The primary method used to seed categories and menus
  // @param n <Number> The number of docs to update per iteration
  // @param m <Number> The number of menus a given doc pertains to
  // @param menus <Array> A list of all possible menus
  // @param categories <Array> A list of all possible categories
  // @param model <mongoose.Model> The mongoose collection in which updates will be applied
  const catGen = categoryGenerator(categories)
  let c = catGen.next().value
  return new Promise(function(resolve, reject){
    async.eachSeries(menus, function(menu, done) {
      const m = menus[Math.floor(Math.random()*menus.length)]
    Model.find({ /*$where: 'this.menu.length < ' + p */})
      .limit(n)
      .exec(function(err, result){
        const ids = result.map(function(r){
          return r._id
        })
        Model.updateMany({_id:ids}, {
          $push: {
            menu: m
          },
          category: c
        }).exec(function(err, result){
          c = catGen.next().value
          done()
        })
      })
    }, function(err, result){
      err ? reject(err) : resolve(result)
    })
  })
}

function _logger(menus, Model){
  // Log the model
  // @param menus <Array> The menus array
  // @param menus <mongoose.Model> The collection to seed
  for(let i=1; i<menus.length; i++){
    Model.find({$where : 'this.menu.indexOf(' + i + ') != -1'})
    .limit(menus.length)
    .exec(function(err, menu_i){
      menu_i.map(function(item_i){
        Model.find({_id:item_i._id}).sort('menu').exec(function(err, menu_j){
          menu_j.map(function(item_j){
            console.log('\t' + menu_i.length + ' items in menu #' + i + '\twith category #' + item_j.category)
          })
        })
      })
    })
  }
}

function _sweep(Model){
  // Clear the DB before seeding
  // @param <mongoose.Model> The collection to seed
  return Model.deleteMany({})
}


/* Implementation */
_sweep(MenuDB.MenuItem)
.exec(function(){
  seed(290, MenuDB.MenuItem)
  .then(function(){
      seedMenus(30, 40, menus, categories, MenuDB.MenuItem)
      .then(function(){
        _logger(menus, MenuDB.MenuItem)
      })
      .catch(function(err){
        console.error(err)
      })
    }
  ).catch(function(err){
    console.error(err)
  })
})
