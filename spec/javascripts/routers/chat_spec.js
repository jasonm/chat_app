describe("ChatApp.Routers.Chat.roomList()", function() {
  beforeEach(function() {
    sinon.spy(ChatApp.Views, "RoomList");
  });

  afterEach(function() {
    ChatApp.Views.RoomList.restore();
  });

  it("creates a new Views.RoomList with its rooms collection", function() {
    var roomsCollection = new ChatApp.Collections.Rooms([{ name: "Chatroom" }]);
    var element = $('<div id="chat-app"></div>');
    var router = new ChatApp.Routers.Chat({ element: element, collections: { rooms: roomsCollection } });

    router.roomList();

    expect(ChatApp.Views.RoomList).toHaveBeenCalledWith({ collection: roomsCollection });
  });

  it("renders the view", function() {

  });
});
