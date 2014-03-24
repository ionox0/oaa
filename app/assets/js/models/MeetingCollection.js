'use strict';

var Backbone  = require('backbone');
var Meeting   = require('./Meeting');

module.exports = Backbone.Collection.extend({
  model: Meeting,
  url: 'http://localhost:3000/api/v1/meetings'
});
