
Given(/^the Admin is on the home page$/) do
  visit root_path
end
Given(/^I am a Administrator with an email "([^"]*)" and password "([^"]*)"$/) do |email, password|
  u = User.new(:email => email,
               :password => password,
  )
  u.save!
end
Given(/^I logged in as admin$/) do
  visit '/users/sign_in'
  @user = FactoryGirl.build :users
  fill_in 'Email', with: "admin@ait.asia"
  fill_in 'Password', with: "secret123"
  click_button 'Log in'
  save_and_open_page
end

Given(/^Iam in User's Profile Page$/) do
 visit root_path
 #save_and_open_page
end

 Then(/^I want to Expect Page with Number of Admins$/) do
   visit '/usersinfo/userlist'
   expect(page).to have_content "Number of Admins are :: 1"
 end

 Then(/^I want to Expect Page with Number of Users$/) do
   #pending # Write code here that turns the phrase above into concrete actions
   expect(page).to have_content "Number of Admins are :: 1"
 end

Then(/^I expect user creation date$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  visit root_path
  click_button 'Users Profile'
  expect(page).to have_content "Created_at"
end

