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

  init: function() {
    new ChatApp.Routers.Chat();
    try {
      Backbone.history.start();
    } catch (e) {
      if (e.message != "Backbone.history has already been started") {
        throw e;
      }
    }
  }
};
