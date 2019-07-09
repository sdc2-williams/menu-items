const mongoose = require('mongoose');

/* Schema */
let MenuItemSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
  options: Object
});

/* Model */
const MenuItem = mongoose.model('MenuItem', MenuItemSchema)

/* Query */
const getMenu = () => {
  return MenuItem.find({})
  .then(data => {
    return(data)
  })
  .catch(err=>console.log('Query Error:' + err))
}
module.exports.MenuItem = MenuItem;
module.exports.getMenu = getMenu;