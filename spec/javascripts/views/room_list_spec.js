describe("Views.RoomList", function() {
  var rooms, el, view;

  beforeEach(function() {
    rooms = new ChatApp.Collections.Rooms([{ name: "Red" }, { name: "Blue" }]);
    el = $("<div></div>");
    view = new ChatApp.Views.RoomList({ el: el, collection: rooms });
  });

  it("renders a new room form", function() {
    view.render();

    expect(el).toContain("form");
    expect(el).toContain("form input[type=text][name=name]");
    expect(el).toContain("form input[type=submit]");
  });

  it("creates a new room when the form is submitted", function() {
    sinon.stub(rooms, "create");
    view.render();

    $("input[name=name]", el).val("Watercooler");
    $("form", el).submit();

    expect(rooms.create).toHaveBeenCalled();
  });

  it("renders the list of rooms", function() {
    view.render();

    expect(el).toContain("ul#chat-rooms li a:contains('Red')")
    expect(el).toContain("ul#chat-rooms li a:contains('Blue')")
  });

  it("re-renders when a model is added to the collection", function() {
    view.render();
    rooms.add({ name: "Green" });

    expect(el).toContain("ul#chat-rooms li a:contains('Green')")
  });
});
