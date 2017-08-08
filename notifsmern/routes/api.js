const express = require('express');
const router = express.Router();
const Notification = require('../model/notifications');

router.get('/notifications',function(req,res,next){
  Notification.find({}).then(function(notifications){
    res.send(notifications);
  })
});

router.post('/notifications',function(req,res,next){
  Notification.create(req.body).then(function(notification) {
    res.send(notification);
  }).catch();
});

router.put('/notifications/:id',function(req,res,next){
  Notification.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Notification.findOne({_id:req.params.id}).then(function(notification){
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
