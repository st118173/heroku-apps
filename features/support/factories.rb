FactoryGirl.define do
  factory :users, class: User do
    email "member@ait.asia"
    password "secret123"
    password_confirmation "secret123"

  end
  factory :admin, class: User do
    email "admin@ait.asia"
    password "secret123"
    password_confirmation "secret123"
  end
end