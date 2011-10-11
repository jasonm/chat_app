Then /^I should see the list of rooms$/ do
  page.should have_content("Chat rooms:")
  page.should have_css(selector_for('the chat room list'))
end

Then /^the list of rooms should be empty$/ do
  page.should have_no_css(selector_for('a chat room list item'))
end

When /^I create a new room "([^"]*)"$/ do |room_name|
  fill_in("Name", with: room_name)
  click_button("Create this new chat room")
end

Then /^the list of rooms should be:$/ do |table|
  expected = table.raw.flatten
  actual   = page.all(selector_for('a chat room list item link')).map(&:text)

  actual.should == expected
end
