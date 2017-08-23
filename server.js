const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//set up express app
const app = express();
const route = express.Router();

// enable cors
const corsOptions = {
  origin: '*', //made have to change after deployment, right now allowing all origins
  methods: ['GET', 'POST']
};

//mongoose setting socket options with recommended 30 sec connection timeout
// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000} },
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } } };


//setting mongodb URI recieved from mLab
var mongouri = "mongodb://rgsoc:rgsoc123@ds153003.mlab.com:53003/wbnotifications";

// var mongouri = process.env.MONGO_URI
//   || 'mongodb://localhost/wbnotification'; // TODO remove me

app.use(express.static('./public'));

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

// use connect method to connect to server
mongoose.connect(mongouri, function (err, res) {
  if (err) {
    console.log('unable to connect to mongodb server', err);
  } else {
    console.log('connection established to', url);
  }
});

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


//initialize the app
app.listen(process.env.port||4002,function(){
  console.log('now listening for requests');
});
