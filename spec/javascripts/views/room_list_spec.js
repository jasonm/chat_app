describe("Views.RoomList", function() {
  var rooms;

  beforeEach(function() {
    rooms = new ChatApp.Collections.Rooms([{ name: "Red" }, { name: "Blue" }]);
  });

  it("renders a new room form", function() {
    var el = $("<div></div>");
    var view = new ChatApp.Views.RoomList({ el: el, collection: rooms });

    view.render();

    expect(el).toContain("form");
    expect(el).toContain("form input[type=text][name=name]");
    expect(el).toContain("form input[type=submit]");
  });

  it("creates a new room when the form is submitted", function() {
    var el = $("<div></div>");
    sinon.stub(rooms, "create");

    var view = new ChatApp.Views.RoomList({ el: el, collection: rooms });

    view.render();
    $("input[name=name]", el).val("Watercooler");
    $("form", el).submit();

    expect(rooms.create).toHaveBeenCalled();
  });

  it("renders the list of rooms", function() {
    var el = $("<div></div>");
    var view = new ChatApp.Views.RoomList({ el: el, collection: rooms });

    view.render();

    expect(el).toContain("ul#chat-rooms li a:contains('Red')")
    expect(el).toContain("ul#chat-rooms li a:contains('Blue')")
  });

  it("re-renders when a model is added to the collection", function() {
  });
});
