const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//TODO import React, ReactDOM, components here?

//set up express app
const app = express();
const route = express.Router();

//connect to mongodb
mongoose.connect('mongodb://localhost/wbnotification');
mongoose.Promise = global.Promise;

//use body-parser middleware to look for JSON data in request body
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error:err.message});
})

//Set headers to allow CORS to prevent CORS errors
app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //remove cacheing so we get most recent notifications
  res.setHeader('Cache-Control', 'no-cache');
})

// TODO add CORS headers

app.listen(process.env.port||4001,function(){
  console.log('now listening for requests');
});
