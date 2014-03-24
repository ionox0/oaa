'use strict';

var Backbone                 = require('backbone');
var $                        = require('jquery');
var Meeting                  = require('../models/Meeting');
var MeetingCollection        = require('../models/MeetingCollection');
var MeetingView              = require('../views/MeetingView');
var MeetingCollectionView    = require('../views/MeetingCollectionView');
var MeetingForm              = require('../views/MeetingForm');
var AgendaItemView           = require('../views/AgendaItemView');
var AgendaItemCollection     = require('../models/AgendaItemCollection');
var AgendaItemCollectionView = require('../views/AgendaItemCollectionView');

module.exports = Backbone.Router.extend({
  routes: {'meetings' : 'index',
           'meetings/new' : 'create',
           'meetings/:id' : 'show'},

  start: function() {
    Backbone.history.start({pushState: false});
  },

  index: function() {
    this.meetingList.fetch();
    $('.mainContent').replaceWith(this.meetingListView.el);
  },

  create: function() {
    var meetingForm = new MeetingForm({model: new Meeting});
    $('.mainContent').replaceWith(meetingForm.el);
  },

  show: function(id) {
    console.log(id);
    var meeting = new Meeting({'_id': id});
    var meetingView = new MeetingView({model: meeting});
    var agendaItemsList = new AgendaItemCollection();
    var agendaItemsView = new AgendaItemCollectionView({collection: agendaItemsList});
    console.log("something");
    meeting.fetch({
      error: function(model, xhr, options) {
        console.log(JSON.parse(xhr.responseText).errors);
      },
      success: function(model, response, options) {
        console.log(meeting);
        $('.mainContent').replaceWith(meetingView.el);
     
        agendaItemsList.fetch({
          success: function() {
            agendaItemsView.belongsToMeeting(id);
            $('.agendaItems').replaceWith(agendaItemsView.el);
          },
          error: function(model, xhr, options) {
            console.log(JSON.parse(xhr.responseText).errors);
          }
        });
      }
    });
  },

  initialize: function() {
    this.meetingList = new MeetingCollection();
    this.meetingListView = new MeetingCollectionView({collection: this.meetingList});
  }
});
