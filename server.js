const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.port || 4002;

//set up express app
const app = express();
const route = express.Router();

// enable cors
const corsOptions = {
  origin: '*', //made have to change after deployment, right now allowing all origins
  methods: ['GET', 'POST']
};

//setting mongodb URI
const mongouri = process.env.PROD_MONGODB
  || 'mongodb://localhost/wbnotification'; // TODO remove me

// TODO run `heroku config:set MONGO_URI=mongodb://something.`mlab`
// after the db has been created

app.use(express.static(process.env.NODE_ENV === 'production' ? './build' : './public'));

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

//connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(mongouri);

//use body-parser middleware to look for JSON data in request body
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error:err.message});
})



app.listen(port, (err) => {
  if (err) throw err;
  console.log('now listening for requests on port: %s', port);
});
