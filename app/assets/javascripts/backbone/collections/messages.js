window.ChatApp.Collections.Messages = Backbone.Collection.extend({
  url: '/messages',
  model: ChatApp.Models.Message
});
