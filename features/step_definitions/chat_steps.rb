When /^I go in "([^"]*)"$/ do |room_name|
  click_link(room_name)
end

Then /^I should see an empty chat$/ do
  page.should have_no_css(selector_for('a chat room message'))
end

When /^I say "([^"]*)"$/ do |message|
  fill_in("Chat", with: message)
  click_button("Send")
end

Then /^I should see that "([^"]*)" chatted "([^"]*)"$/ do |user_name, message|
  messages = page.all(selector_for('a chat room message')).map(&:text)
  expected_message = "#{user_name}: #{message}"

  messages.should include(expected_message)
end
