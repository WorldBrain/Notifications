# notifications 
The Notifications Center is the page for Worldbrain administrators to create and send new notifications to their users.  Examples of notifications include system udpates, security notices and general notices to Worldbrain users.  

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

## Running the web-app
To make sure server is up and running: npm start
To run the react-app: npm start run-dev
To run mongodb: sudo service mongodb start
