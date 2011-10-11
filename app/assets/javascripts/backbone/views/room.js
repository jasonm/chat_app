window.ChatApp.Views.Room = Backbone.View.extend({
  initialize: function() {
  },

  template: JST['room'],

  render: function() {
    $(this.el).empty().append(this.template({ room: this.model }));
    return this;
  }
});
