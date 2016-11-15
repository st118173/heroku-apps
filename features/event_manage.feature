Feature: Users should be able to get something up on your server and see it
  published
  In order to access organisation website user should login
  Scenario: User signs in successfully with email
    Given I am not logged in
    And I am a user with an email "member1@ait.asia" and password "secret123"
    When I go to the sign in page
    And I sign in as user
    Then I should be redirected to homepage
