//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.ChatApp = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  init: function(options) {
    ChatApp.options = options;
    new ChatApp.Routers.Chat(options);

    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
