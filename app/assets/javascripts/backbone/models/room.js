window.ChatApp.Models.Room = Backbone.Model.extend({
  initialize: function() {
    this.messages = new ChatApp.Collections.Messages();
    this.messages.url = '/rooms/' + this.id + '/messages';
  }
});
