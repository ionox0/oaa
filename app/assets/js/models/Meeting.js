'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribdute: '_id',
  urlRoot: 'http://localhost:3000/api/v1/meetings/',
  defaults: {
    name: '',
    description: '',
    comments: [],
    agendaItems: []
  }
});
