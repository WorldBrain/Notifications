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

app.use(express.static('./public'));

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

//connect to mongodb
mongoose.connect('mongodb://localhost/wbnotification');
mongoose.Promise = global.Promise;

//use body-parser middleware to look for JSON data in request body
app.use(bodyParser.json());
// app.use(bodyParser.json());

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
