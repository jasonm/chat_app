window.ChatApp.Collections.Rooms = Backbone.Collection.extend({
  url: '/rooms',
  model: ChatApp.Models.Room
});
