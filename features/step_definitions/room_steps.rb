Then /^I should see the list of rooms$/ do
  page.should have_content("Chat rooms:")
  page.should have_css("ul#chat-rooms")
end

Then /^the list of rooms should be empty$/ do
  page.should have_no_css("ul#chat-rooms>li")
end

When /^I create a new room "([^"]*)"$/ do |room_name|
  fill_in("Name", with: room_name)
  click_button("Create this new chat room")
end

Then /^the list of rooms should be:$/ do |table|
  room_names = table.raw.flatten
  sorted_room_list_css = room_names.map { |room_name| "li:contains('#{room_name}')" }.join("+")
  within "ul#chat-rooms" do
    page.should have_css(sorted_room_list_css)
  end
end
