describe("Models.Room", function() {
  it("nests messages", function() {
    var room = new ChatApp.Models.Room({ id: 15 });
    expect(room.messages instanceof ChatApp.Collections.Messages).toBeTruthy();
    expect(room.messages.url).toEqual("/rooms/15/messages");
  });
});
