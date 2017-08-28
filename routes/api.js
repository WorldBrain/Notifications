const express = require('express');
const router = express.Router();
const Notification = require('../model/notifications');


//set the route path and initialize the API
router.get('/notifications',function(req,res,next){
  Notification.find({}).then(function(notifications){
    res.send(notifications);
  })
});

router.post('/notifications',function(req,res,next){
  console.log('req.method'); //"POST"
  var notification = new Notification();
  notification.title = req.body.title;
  notification.body = req.body.body;
  req.body
  res.json({message:'json added'});

  Notification.create(req.body).then(function(notification) {
    res.send(notification);
  }).catch();
});

router.put('/notifications/:id',function(req,res,next){
  Notification.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Notification.findOne({_id:req.params.id}).then(function(notification){
      console.log('what is happening');
      res.send(notification);
    });
  })
});

router.delete('/notifications/:id',function(req,res,next){
  Notification.findByIdAndRemove({_id:req.params.id}).then(function(notification) {
  res.send(notification);
    });
});

module.exports = router;
