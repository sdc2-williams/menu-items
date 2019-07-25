const mongoose = require('mongoose');

/* Schema */
const MenuItemSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
  options: Object,
  menu: Array,
  category: Number,
});

/* Model */
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

/* Query */
const getMenu = params => MenuItem.find(params)
  .then(data => (JSON.stringify(data)))
  .catch((err) => { throw err; });

  const getMenuByName = params => MenuItem.find(params)
  .then(data => (JSON.stringify(data)))
  .catch((err) => { throw err; });

  const getAllMenus = params => MenuItem.find()
  .then(data => (JSON.stringify(data)))
  .catch((err) => { throw err; });

  const deleteMenu = params => MenuItem.deleteMany(params)
  .then(data => (JSON.stringify(data)))
  .catch((err) => { throw err; });

  const createMenu = params => MenuItem.create(params)
  .then(data => (JSON.stringify(data)))
  .catch((err) => { throw err; });

  const updateMenu = (params) => {
    const modelId = params._id;
    const newMenu = params.menu;
    const newName = params.name;
    const newDescription = params.description;
    const newPrice = params.price;
    const newCategory = params.category;

    MenuItem.update({_id: modelId},{$set:{menu:newMenu,name:newName, description: newDescription, price: newPrice, category: newCategory }},{multi:true,new:true})
   .then(data => (JSON.stringify(data)))
   .catch((err) => { throw err; });
  };

module.exports.MenuItem = MenuItem;
module.exports.getMenu = getMenu;
module.exports.getMenuByName = getMenuByName;
module.exports.getAllMenus = getAllMenus;
module.exports.deleteMenu = deleteMenu;
module.exports.createMenu = createMenu;
module.exports.updateMenu = updateMenu;
