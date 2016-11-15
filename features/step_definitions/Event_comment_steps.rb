Given(/^I didn't sign in$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  visit '/'
end
Given(/^I am a user, has an email "([^"]*)" and password "([^"]*)"$/) do |email, password|
  #pending # Write code here that turns the phrase above into concrete actions
  u = User.new(:email => email, :password => password,)
  u.save!
end
When(/^I'll go to the sign up page$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  visit '/users/sign_up'
end
When(/^I'll register  as user$/) do
  #pending # Write code here that turns the phrase above into concrete actions
  @user = FactoryGirl.build :users
  fill_in 'Email', with: "member5@ait.asia"
  fill_in 'Password', with: "password"
  fill_in 'Password confirmation', with: 'password'
  click_on "Register"
end
When(/^I click on Add New Event button$/) do
  click_on "Add New Event"
end
Then(/^I should redirect to programs new page$/) do
  visit '/programs/new'
end
When(/^I fill the details of the form$/) do
  @program = FactoryGirl.build :program
  fill_in 'Event name', with: "Event-1"
  page.fill_in 'program_event_details', :with => 'These are details for first event'
end
When(/^Click on Create Program$/) do
  click_on "Create Program"
end
Then(/^I should redirect to programs show pages$/) do
  #save_and_open_page
end
Then(/^I should see a link for back$/) do
  expect(page).to have_content "Back"
end
When(/^I click on Back$/) do
    click_on "Back"
end
Then(/^I should redirect to programs page$/) do
  visit '/programs'
end
Then(/^I should expect event names$/) do
  expect(page).to have_content "#{@program.Event_Name}"
end
