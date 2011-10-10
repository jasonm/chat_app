window.ChatApp.Views.RoomList = Backbone.View.extend({
  tagName: "ul",
  id: "chat-rooms",

  initialize: function() {
  },

  template: JST['room_list'],

  render: function() {
    $(this.el).empty().html(this.template({ rooms: this.collection }));
    return this;
  }

});
