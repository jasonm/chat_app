window.ChatApp.Routers.Chat = Backbone.Router.extend({
  initialize: function(options) {
    this.el = options.element;
    this.rooms = options.collections.rooms;
  },

  routes: {
    "": "roomList",
    "rooms/:id": "chatRoom"
  },

  roomList: function() {
    var view = new ChatApp.Views.RoomList({ collection: this.rooms });
    $(this.el).empty().append(view.render().el);
  },

  chatRoom: function(roomId) {
    var room = this.rooms.get(roomId);
    var view = new ChatApp.Views.Room({ model: room });
  }
});
