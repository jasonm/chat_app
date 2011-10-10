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
    var view = new ChatApp.Views.RoomList({ el: el });

    var stubRoom = { save: sinon.stub() };
    sinon.stub(ChatApp.Models, "Room", function() {
      return stubRoom;
    });

    view.render();
    $("input[name=name]", el).val("Watercooler");
    $("form", el).submit();

    extect(ChatApp.Models.Room).toHaveBeenCalled();
    expect(stubRoom.save).toHaveBeenCalled();

    ChatApp.Models.Room.restore();
  });
});
