//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//allow requests for assets on the same-origin and other origins which return appropriate CORs headers
const cors = require('cors');

//define predetermined port number
const port = process.env.port || 4002;

//set up express app to create instances
const app = express();
const route = express.Router();

// enable cors
const corsOptions = {
  origin: '*', //made have to change after deployment, right now allowing all origins
  methods: ['GET', 'POST']
};

//setting mongodb URI depending on production or development environment
const mongouri = process.env.PROD_MONGODB
  || 'mongodb://localhost/wbnotification';

//Tell express which files to serve based on running environment
app.use(express.static(process.env.NODE_ENV === 'production' ? './build' : './public'));

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

//set up mongoose and db connection
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


//starts server and listens for requests
app.listen(port, (err) => {
  if (err) throw err;
  console.log('now listening for requests on port: %s', port);
});
