describe("Collections.Rooms", function() {
  it("has a url of /rooms", function() {
    expect(new ChatApp.Collections.Rooms().url).toEqual("/rooms");
  });
});
