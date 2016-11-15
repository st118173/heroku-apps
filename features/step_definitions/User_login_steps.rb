
Given(/^I am not logged in$/) do
 visit '/'
end
Given /^I am a user with an email "([^"]*)" and password "([^"]*)"$/ do |email, password|
  u = User.new(:email => email,
               :password => password,
               )
  u.save!
end
When(/^I go to the sign in page$/) do
  visit '/users/sign_in'
  #save_and_open_page
end

And (/^I sign in as user$/) do
  @user = FactoryGirl.build :users
  fill_in 'Email', with: "member@ait.asia"
  fill_in 'Password', with: "secret123"
  click_button 'Log in'
  #save_and_open_page
end

And(/^I should be redirected to homepage$/) do
  visit root_path
  #save_and_open_page
end


Then(/^I can also sign out$/) do
  #pending # Write code here that turns the phrase above into concrete actions

  click_button 'Sign out'
  #save_and_open_page
end

f