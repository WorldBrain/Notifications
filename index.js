// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const routes =  require('./routes/api');
// //set up express app
// const app = express();
//
// //connect to mongodb
// mongoose.connect('mongodb://localhost/wbnotification');
// mongoose.Promise = global.Promise;
//
// app.use(express.static('public'));
//
// //use body-parser middleware
// app.use(bodyParser.json());
//
// //initialize routes
// app.use('/api', routes);
//
// //error handling middleware
// app.use(function(err,req,res,next){
//   console.log(err);
//   res.status(422).send({error:err.message});
// })
//
// app.listen(process.env.port||4001,function(){
//   console.log('now listening for requests');
// });
