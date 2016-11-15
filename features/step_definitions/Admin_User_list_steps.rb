
Given(/^the admin is on the home screen$/) do
    visit root_path
end
Given(/^I am a admin with an email "([^"]*)" and password "([^"]*)"$/) do |email, password|
  u = User.new(:email => email,
               :password => password,
  )
  u.save!
end
Given(/^I went to sign in page$/) do
  visit '/users/sign_in'
end
When(/^I sign in as admin$/) do
  @user = FactoryGirl.build :users
  fill_in 'Email', with: "admin@ait.asia"
  fill_in 'Password', with: "secret123"
  click_button 'Log in'
  #save_and_open_page
end
And(/^I click Profile  button$/) do
  visit root_path
   click_button('Users Profile')
 end
Then(/^I should see all the User's email id$/) do
    visit '/usersinfo/userlist'
    expect(page).to have_content "#{@user.email}"
end
And(/^I click  Suspend$/) do
  visit '/usersinfo/userlist'
  click_button("2")
  save_and_open_page
end
Then(/^I expect content to have that the user is banned$/) do
  expect(page).to have_content "User Account is Banned please click Release to Unban"
end
