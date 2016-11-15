Feature: Event_comments
  In order to access comment field user should login
  Scenario: User Should able to post a comment
    Given I didn't sign in
    And I am a user, has an email "member3@ait.asia" and password "secret123"
    When I'll go to the sign up page
    And I'll register  as user

    When I click on Add New Event button
    Then I should redirect to programs new page
    When I fill the details of the form
    And Click on Create Program
    Then I should redirect to programs show pages
    And I should see a link for back
    When I click on Back
    Then I should redirect to programs page

    Then I should expect event names

