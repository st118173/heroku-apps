class CreatePrograms < ActiveRecord::Migration[5.0]
  def change
    create_table :programs do |t|
      t.string :Event_Name
      t.string :event_details
      t.timestamps
    end
  end
end
