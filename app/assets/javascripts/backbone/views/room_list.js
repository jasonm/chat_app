window.ChatApp.Views.RoomList = Backbone.View.extend({
  tagName: "section",

  events: {
    "submit form": "submit"
  },

  initialize: function() {
  },

  template: JST['room_list'],

  render: function() {
    $(this.el).empty().html(this.template({ rooms: this.collection }));
    this.renderRooms();
    return this;
  },

  renderRooms: function() {
    var ul = this.$("ul#chat-rooms");
    var roomTemplate = JST['room_list_item'];

    this.collection.each(function(room) {
      ul.append(roomTemplate({ room: room }));
    });
  },

  submit: function(event) {
    event.preventDefault();

    this.collection.create({
      name: this.$("input[name=name]").val()
    });
  }

});
