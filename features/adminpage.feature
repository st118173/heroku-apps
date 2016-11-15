Feature: Admin Page
  This is Admin Page
  Scenario: Admin should able to see recently registered users and i should banned users
    Given the admin is on the home screen

    And I am a admin with an email "admin1@ait.asia" and password "secret123"
    And I went to sign in page
    When I sign in as admin
    And I click Profile  button
    Then I should see all the User's email id
    And I click  Suspend
    Then I expect content to have that the user is banned

    Scenario: Admin should able to see statistics of Users
      Given the Admin is on the home page
      And I am a Administrator with an email "admin2@ait.asia" and password "secret123"
      Given I logged in as admin
      Given Iam in User's Profile Page
      Then I want to Expect Page with Number of Admins
      And I want to Expect Page with Number of Users
      And I expect user creation date


