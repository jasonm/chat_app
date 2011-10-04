Then /^I should be logged out$/ do
  page.should have_no_content "Logged in as"
end

When /^I log in as "([^"]*)"$/ do |name|
  fill_in("Your name", with: name)
  click_button("Login")
end

Then /^I should be logged in as "([^"]*)"$/ do |name|
  page.should have_no_content "Logged in as #{name}"
end

When /^I log out$/ do
  click_link("Log out")
end
