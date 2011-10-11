describe("ChatApp.Views.Room", function() {
  var users, messages, room, el, view;

  beforeEach(function() {
    messages = new ChatApp.Collections.Messages([{ body: "Hello", user_name: "Jason" }]);

    sinon.stub(messages, "fetch", function(options) {
      options.success();
    });

    room = new ChatApp.Models.Room({ name: "Red", id: 1 });
    room.messages = messages;

    el = $("<div></div>");
    view = new ChatApp.Views.Room({ el: el, model: room });
  });

  it("renders a new message form", function() {
    view.render();

    expect(el).toContain("form");
    expect(el).toContain("form input[type=text][name=body]");
    expect(el).toContain("form input[type=submit]");
  });

  it("creates a new message when the form is submitted", function() {
    sinon.stub(messages, "create");
    view.render();

    $("input[name=body]", el).val("Hello");
    $("form", el).submit();

    expect(messages.create).toHaveBeenCalledWith({ body: "Hello" });
    expect($("input[name=body]", el).val()).toEqual("");
  });

  it("fetches and renders messages", function() {
    view.render();

    expect(messages.fetch).toHaveBeenCalled();
    expect(el).toContain("ul#chat-messages li:contains('Jason: Hello')");
  });

  it("re-renders when messages are added", function() {
    view.render();

    messages.add([{ body: "Goodbye", user_name: "Jason" }]);
    expect(el).toContain("ul#chat-messages li:contains('Jason: Goodbye')");
  });
});
