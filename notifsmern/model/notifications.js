const mongoose = require('mongoose'); //node package to help interact with mongodb
const Schema = mongoose.Schema;

const NotificationSchema = new Schema ({
  number: {
    type: Number,
    required: [true, 'Notification number in chronological order']
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

//export model to be used in webapp
module.exports = Notification;
