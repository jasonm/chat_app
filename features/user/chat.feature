@javascript
Feature: Logged in user can chat in rooms

  Scenario: View an empty chat room
    When I go to the home page
    And I log in as "Jason"
    And I create a new room "Watercooler"
    And I go in "Watercooler"
    Then I should see an empty chat

  Scenario: Chat
    When I go to the home page
    And I log in as "Jason"
    And I create a new room "Watercooler"
    And I go in "Watercooler"
    And I say "Hey there!"
    Then I should see that "Jason" chatted "Hey there!"
    And I say "What's up?"
    Then I should see that "Jason" chatted "What's up?"
