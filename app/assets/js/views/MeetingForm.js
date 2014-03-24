'use strict';

var Backbone = require('backbone');
var $        = require('jquery');
Backbone.$   = $;

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'meeting-form col_12 grid',

  initialize: function() {
    this.render();
  },

  events: {
    submit: "save"
  },

  render: function() {
    var template = require('../../templates/meetingForm.hbs');
    this.$el.html(template(this.model.toJSON()));
    return this;
  },

  save: function(e) {
    e.preventDefault();
    var newName = this.$('input[name=name]').val();
    var newDescription = this.$('input[name=description]').val();
    var newStartsAt = this.$('input[name=starts_at]').val();
    this.model.save({name: newName, description: newDescription, starts_at: newStartsAt}, {
      success: function() {
        Backbone.history.navigate('meetings', {trigger: true});
      },
      error: function() {
        alert("There were errors saving the meeting");
      }
    });
  }
});
