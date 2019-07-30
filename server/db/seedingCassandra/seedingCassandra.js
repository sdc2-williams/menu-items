require('dotenv').config();
var cassandra = require('cassandra-driver');


var client = new cassandra.Client({contactPoints: ['localhost']});


const loadCSVIntoDatabase = (n) => {
  const filename = path.join(__dirname, 'outputv_' + n.toString() + '.csv');

  var loadData = "COPY menuItem (ind, menu, name, description, price, category, options) FROM filename=? with header=false and delimiter =’,’;"

  client.execute(loadData, filename, function(err, result) {
       if (error) {
         loadCSVIntoDatabase(n);
       } else {
        console.log('loaded');
         } //else
   });
};


for (var i = 1; i < 100; i++){
  loadCSVIntoDatabase(n)
}
