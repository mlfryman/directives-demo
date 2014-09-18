'use strict';

// var Mongo = require('mongodb');

function Title(){
}

Object.defineProperty(Title, 'collection', {
  get: function(){return global.mongodb.collection('titles');}
});

Title.create = function(o, cb){
  Title.collection.save(o, cb);
};

Title.all = function(cb){
  Title.collection.find().toArray(cb);
};

Title.destroy = function(index, cb){
  Title.collection.remove({index:index}, cb);
};

module.exports = Title;
