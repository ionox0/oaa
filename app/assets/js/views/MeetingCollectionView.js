'use strict';

var Backbone         = require('backbone');
var MeetingView      = require('./MeetingView');
var ShortMeetingView = require('./ShortMeetingView');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'grid col_12',

  initialize: function() {
    this.collection.on('add', this.addMeeting, this);
    this.collection.on('reset', this.addAll, this);
  },

  addMeeting: function(meeting) {
    var meetingView = new ShortMeetingView({model: meeting});
    this.$el.append(meetingView.el);
  },

  addAll: function() {
    this.collection.forEach(this.addMeeting);
  },

  render: function() {
    this.addAll();
  }
});
