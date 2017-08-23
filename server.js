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

// TODO run `heroku config:set MONGO_URI=mongodb://something.`mlab`
// after the db has been created

// db = mongoose.connect(mongouri);

app.use(express.static('./public'));

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

//connect to mongodb
// mongoose.connect(mongouri, options);
mongoose.connect(mongouri);
mongoose.Promise = global.Promise;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
//
//   mongoose.connection.db.close(function (err) {
//     if(err) throw err;
//   });
//
// }),

//use body-parser middleware to look for JSON data in request body
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error:err.message});
})



app.listen(process.env.port||4002,function(){
  console.log('now listening for requests');
});
