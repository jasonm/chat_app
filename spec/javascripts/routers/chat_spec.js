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
});

describe("ChatApp.Routers.Chat.chatRoom()", function() {
  beforeEach(function() { sinon.spy(ChatApp.Views, "Room"); });
  afterEach(function() { ChatApp.Views.Room.restore(); });

  it("creates a new View.Room with a room", function() {
    var room = new ChatApp.Models.Room({ name: "Red", id: 1 });
    var rooms = new ChatApp.Collections.Rooms([room]);
    var element = $('<div id="chat-app"></div>');
    var router = new ChatApp.Routers.Chat({ element: element, collections: { rooms: rooms } });

    router.chatRoom(1);

    expect(ChatApp.Views.Room).toHaveBeenCalledWith({ model: room });
  });
});
