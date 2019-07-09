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
  return MenuItem.find({}, function(err, docs){
    if (!err) {
      console.log(docs);
      process.exit()
    } else {
      console.log('find' + err)
    }
  })
}
module.exports.MenuItem = MenuItem;
module.exports.getMenu = getMenu;