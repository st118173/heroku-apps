class Program < ApplicationRecord
  validates :Event_Name,:event_details, presence: true
  acts_as_commontable
end
