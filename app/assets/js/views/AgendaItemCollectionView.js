'use strict';

var Backbone       = require('backbone');
var $              = require('jquery');
var AgendaItemView = require('./AgendaItemView');
Backbone.$         = $;

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'agenda_items',

  intialize: function() {
    console.log(this);
    this.collection.on('add', this.addAgendaItem, this);
    this.collection.on('reset', this.addAll, this);
  },

  addAgendaItem: function(agendaItem) {
    console.log(agendaItem);
    var agendaItemView = new AgendaItemView({model: agendaItem});
    this.$el.append(agendaItemView.el);
  },

  addAll: function() {
    this.collection.forEach(this.addAgendaItem);
  },

  render: function() {
    this.addAll()
  },

  belongsToMeeting: function(meeting_id) {
    this.collection.where({_meeting: meeting_id}).forEach(this.addAgendaItem);
  }
});
