describe("Chat App", function() {
  it("creates a new Chat router when initialized", function() {
    sinon.spy(ChatApp.Routers, "Chat");

    ChatApp.init();

    expect(ChatApp.Routers.Chat).toHaveBeenCalled();
    ChatApp.Routers.Chat.restore();
  });

  it("starts Backbone history when initialized", function() {
    sinon.spy(Backbone.history, "start");

    ChatApp.init();

    expect(Backbone.history.start).toHaveBeenCalled();
    Backbone.history.start.restore();
  });
});
