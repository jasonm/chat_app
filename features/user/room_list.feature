@javascript
Feature: Logged in user can view a list of the rooms

  Scenario: View the list of rooms
    When I log in as "Jason"
    Then I should see the list of rooms
    And the list of rooms should be empty

  Scenario: Create a new room
    When I log in as "Jason"
    And I create a new room "Watercooler"
    Then the list of rooms should be:
      | Watercooler |
    When I create a new room "General Discussion"
    Then the list of rooms should be:
      | Watercooler        |
      | General Discussion |
