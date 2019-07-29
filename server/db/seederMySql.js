const fs = require('fs');
const path = require('path');
const os = require('os');
const loremIpsum = require("lorem-ipsum").loremIpsum;
const mysql = require('mysql');
//const csv = require('fast-csv');
var csv = require('csv-parser')
require('dotenv').config();

//console.log(process.env)

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});

const generateWords = (num) => {
  return  loremIpsum({
    count: num,        // Number of "words"
    format: "plain",   // "plain" or "html"
    units: "words"     // paragraph(s), "sentence(s)", or "word(s)"
  })
}

const getRandomNum = (min,max) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

var getRandomBoolean = ()  => {
  return Math.random() >= 0.5;
}


const generateOptions = (num) => {
  options = '';
  for (var i= 0; i < num; i++) {
  var value = getRandomBoolean()
  var key = generateWords(2);
  if (i !== num - 1) {
    options += key + ': ' + value + ',';
  } else {
    options += key + ': ' + value;
  }

  }
  return options;
}

const generateMenuItems = (num) => {
var menus = [];

for (var i = 0; i < num; i++) {
    var menuItem = {};
    menuItem.index = i;
    menuItem.menu =  getRandomNum(1,10000);
    menuItem.name = generateWords(2);
    menuItem.description = generateWords(4);
    menuItem.price = getRandomNum(1,30).toString() + '.' + getRandomNum(10,99).toString();
    menuItem.category = getRandomNum(1,3);
    menuItem.__v = getRandomNum(1,3);
    menuItem.options = generateOptions(getRandomNum(1,6))
    menus.push(menuItem);
}
    return menus;
};


const createCSV = (n) => {

  var data = generateMenuItems(100000);

  const filename = path.join(__dirname, 'outputv_' + n.toString() + '.csv');
  const output = [];

data.forEach((d) => {
  const row = []; // a new array for each row of data
  row.push(`"${d.index}"`);
  row.push(`"${d.menu}"`);
  row.push(`"${d.name}"`);
  row.push(`"${d.description}"`);
  row.push(`"${d.price}"`);
  row.push(`"${d.category}"`);
  row.push(`"${d.__v }"`);
  row.push(`"${d.options }"`);

  output.push(row.join()); // by default, join() uses a ','
});

fs.writeFileSync(filename, output.join(os.EOL))

};


const loadCSVIntoDatabase = (n) => {
  let query = 'LOAD DATA LOCAL INFILE ? INTO TABLE menuItem (ind, menu, name, description, price, category, version, options)';

  const filename = path.join(__dirname, 'outputv_' + n.toString() + '.csv');


  connection.query(query, filename, (error, response) => {
       if (error) {
         loadCSVIntoDatabase(n);
       } else {
         if (n === 100 ) {
          connection.end(function(errCon) {
            if (errCon) {
              console.log(errCon)
            }
          }) // connection.end

          } // end if for the last file
         } //else
   });
};


for (var i = 1; i <= 100; i++) {
 // createCSV(i);
  loadCSVIntoDatabase(i);
};
