

Given(/^the Users is on the home screen$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  visit '/'

end

When(/^the Users clicks the Sign up button to register$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  #find_link('Sign up', href: project_path(@project)).click
  click_on "Sign up"
end

Then(/^Register screen is loaded$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  visit '/users/sign_up'
end

When(/^the Users fill his email <email>$/) do
  visit '/users/sign_up'
  fill_in 'Email', with: 'member1@ait.asia'
end

When(/^the Users fill his password <password>$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  fill_in 'Password', with: 'mysecret'
end
When(/^the Users fill the validation password <validationPassword>$/) do
  fill_in 'Password confirmation', with: 'mysecret'
end
When(/^the Users clicks the Sign up button$/) do
  click_on "Register"
end

Then(/^the user will redirect to home page by automatically login with above registered user$/) do
  visit '/'
  expect(text).to have_content "Welcome member1@ait.asia"
  #save_and_open_page
end

