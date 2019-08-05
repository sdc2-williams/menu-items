const path = require('path');
const mysql = require('mysql');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});


const getAllMenus = function(callback) {
  let conStr = 'select * from menuItem;';
  connection.query (conStr, function(err, result) {
    if (err) {
      callback(err,null)
    } else {

      callback(null,result);
    }
  });
};


const getMenu = function(menu, callback) {
  let conStr = `select * from menuItem where menu = ?;`;
  console.log(menu)
  connection.query (conStr, menu, function(err, result) {
    if (err) {
      callback(err,null)
    } else {

      callback(null,result);
    }
  });
};


const createMenu = function(menu, callback) {
  let conStr = `insert into menuItem (ind, menu, name, description, price, category, version, options) values (?,?,?,?,?,?,?,?);`;

  connection.query (conStr, [menu.ind,menu.menu,menu.name,menu.description,menu.price,menu.category,menu.version, menu.options], function(err, result) {
    if (err) {
      callback(err,null)
    } else {
      callback(null,result);
    }
  });
};

const updateMenu = function(menu, id, callback) {
 let fields = Object.keys(menu)
 var result = 'update menuItem set '
   result += fields.map(field => {
  let conStr = `${field} = "${menu[field]}" `
  return conStr
  });
  result += ` where id = ${id}`
  //console.log(result)
  connection.query (result, function(err, result) {
    if (err) {
      callback(err,null)
    } else {
      callback(null,result);
    }
  });

};

const deleteMenu = function(menu, callback) {
  let conStr = `delete from menuItem where menu = ?;`;

  connection.query (conStr, menu, function(err, result) {
    if (err) {
      callback(err,null)
    } else {
      callback(null,result);
    }
  });
};


module.exports = {
  getAllMenus,
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu
};
