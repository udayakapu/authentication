var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//Connect to cloud database
var username = "udayakapu";
var password = "surya123";
var address = '@ds037488.mongolab.com:37488/heroku_app17134212';
connect();

//Connect to mongo
function connect() {
 var url = 'mongodb://' + username + ':' + password + address;
 mongoose.connect(url);
}

function disconnect() {
  mongoose.disconnect(); 
}
