'use strict';

var Backbone   = require('backbone');
var $          = require('jquery');
Backbone.$     = $;

module.exports = Backbone.View.extend({
  tagView: 'div',
  className: 'agenda-item',

  initialize: function() {
    this.render();
  },

  render: function() {
    var agendaItemAttributes = this.model.toJSON();
    var template = require('../../templates/agendaItem.hbs');
    this.$el.html(template(agendaItemAttributes));
    return this;
  }
});
