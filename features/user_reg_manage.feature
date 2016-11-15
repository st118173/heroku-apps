

Feature: Registration
  In order to access organisation website user should register
  Scenario: Users are able to register
    Given the Users is on the home screen
    When the Users clicks the Sign up button to register
    Then Register screen is loaded
    When the Users fill his email <email>
    When the Users fill his password <password>
    When the Users fill the validation password <validationPassword>
    When the Users clicks the Sign up button
    Then the user will redirect to home page by automatically login with above registered user


