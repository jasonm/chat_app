@javascript
Feature: Visitor can login

  Scenario: Not logged in by default
    When I go to the home page
    Then I should be logged out

  Scenario: As a visitor, I can log in
    When I go to the home page
    And I log in as "Jason"
    Then I should be logged in as "Jason"

  Scenario: Log out
    When I go to the home page
    And I log in as "Jason"
    And I log out
    Then I should be logged out
