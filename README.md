# notifications
The Notifications Center is the page for Worldbrain administrators to create and send new notifications to their users.  Examples of notifications include system udpates, security notices and general notices to Worldbrain users.  This is a MERN stack application (MongoDB/Express/React/Node.js).  

## Getting Started  
To get started with the Notifications webapp, please clone and follow the instructions for installation and command lines to start up the webapp below:  

## Installing
You should have Node and NPM installed   
node -v (to check node version)  

You should also have Mongdb Community Edition installed https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ (Ubuntu version)


This app uses the following dependencies:
Express: provides a framework to set up our Node.js server  
Body-Parser: parses incoming request bodies to send data/JSONs via req.body POST route  
Nodemon: watches our server.js file for changes, then restarts it  
Mongoose: provides methods and schema to interact with Mongodb  

Install with:  
npm i express body-parser nodeman mongoose --save  

## Testing routes
To interact with MongoDB, you can either use Robomongo or Studio 3t (download whichever is most convenient).  It should automatically connect with mongo and you can create view the Notifications collection

To test the routes specified in src/api.js, download Postman.  You can test all of the CRUD routes and create new notifications via Postman.

## Running the web-app
To make sure server is up and running: npm start  
To run the react-app: npm run start-dev
To run mongodb: sudo service mongodb start  
