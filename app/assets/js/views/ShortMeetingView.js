'use strict';

var Backbone = require('backbone');
var $        = require('jquery');
Backbone.$   = $

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'meeting',

  initialize: function() {
    this.render();
  },

  render: function() {
    var meetingAttributes = this.model.toJSON();
    var template = require('../../templates/shortMeeting.hbs');
    this.$el.html(template(meetingAttributes));
    return this;
  }
});
