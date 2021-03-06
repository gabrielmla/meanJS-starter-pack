// modules =================================================
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');
var mongoose       = require('mongoose');

// configuration ===========================================

// express instance
var app = express();

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters | parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, '../client')));

// routes ==================================================
app.get('/', function (req, res) {
  res.sendfile(path.resolve('client/index.html'));
});

// Example route
var exampleRoutes = require('./routes/example');
app.use('/example', exampleRoutes);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;                         
