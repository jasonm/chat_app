window.ChatApp.Views.Room = Backbone.View.extend({
  initialize: function() {
    this.rendered = new $.Deferred();

    _.bindAll(this, "submit", "renderMessages");

    this.messages = this.model.messages;
    this.messages.bind("add", this.renderMessages);
    this.messages.fetch({ success: this.renderMessages });
  },

  events: {
    "submit form": "submit"
  },

  template: JST['room'],

  render: function() {
    $(this.el).empty().append(this.template({ room: this.model }));
    this.rendered.resolve();
    return this;
  },

  renderMessages: function() {
    var self = this;
    this.rendered.done(function() {
      var ul = self.$("ul#chat-messages");
      var messageTemplate = JST['message'];

      ul.empty();
      self.messages.each(function(message) {
        ul.append(messageTemplate({ message: message }));
      });
    });
  },

  submit: function(event) {
    event.preventDefault();

    this.messages.create({
      body: this.$("input[name=body]").val()
    });

    this.$("input[name=body]").val("");
  }
});
