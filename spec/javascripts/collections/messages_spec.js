describe("ChatApp.Collections.Messages", function() {
  it("has a url of /messages", function() {
    expect(new ChatApp.Collections.Messages().url).toEqual("/messages");
  });

  it("holds instances of ChatApp.Models.Message", function() {
    expect(new ChatApp.Collections.Messages().model).toEqual(ChatApp.Models.Message);
  });
});
