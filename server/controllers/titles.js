'use strict';

var Title = require('../models/title');

exports.create = function(req, res){
  Title.create(req.body, function(err, title){
    res.send({title:title});
  });
};

exports.index = function(req, res){
  Title.all(function(err, titles){
    res.send({titles:titles});
  });
};

exports.destroy = function(req, res){
  Title.destroy(req.params.id, function(){
    res.send({id:req.params.id});
  });
};
