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
    return this;
  },

  submit: function(event) {
    event.preventDefault();

    this.collection.create({
      name: this.$("input[name=name]").val()
    });
  }

});
