describe("Views.RoomList", function() {
  it("renders a new room form", function() {
    var el = $("<div></div>");
    var view = new ChatApp.Views.RoomList({ el: el });

    view.render();

    expect(el).toContain("form");
    expect(el).toContain("form input[type=text][name=name]");
    expect(el).toContain("form input[type=submit]");
  });

  it("creates a new room when the form is submitted", function() {
    var el = $("<div></div>");
    var roomsCollection = { create: sinon.stub() };
    var view = new ChatApp.Views.RoomList({ el: el, collection: roomsCollection });

    view.render();
    $("input[name=name]", el).val("Watercooler");
    $("form", el).submit();

    expect(roomsCollection.create).toHaveBeenCalled();
  });
});
