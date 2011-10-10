window.ChatApp.Routers.Chat = Backbone.Router.extend({
  initialize: function(options) {
    this.el = options.element;
    this.rooms = options.collections.rooms;
  },

  routes: {
    "": "roomList"
  },

  roomList: function() {
    var view = new ChatApp.Views.RoomList({ collection: this.rooms });
    $(this.el).empty().append(view.render().el);
  }
});
