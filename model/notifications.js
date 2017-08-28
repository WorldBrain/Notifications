const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creates new instance of mongoose.schema
const NotificationSchema = new Schema ({
  number: {
    type: Number,
  },
  title: {
    type: String,
    required: [true, 'Notfication Title']
  },
  body: {
    type: String,
    required: [true, 'Notification Message']
  },
  date: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: String
    //TODO may have to require later when listener is added to pouchdb
  }

});

//create model Name
const Notification = mongoose.model('notification', NotificationSchema);

//export model to be used in routes/api.js
module.exports = Notification;
