class CreateTrucks < ActiveRecord::Migration[5.1]
  def change
    create_table :trucks do |t|
      t.string :name, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.boolean :overnight, default: false
      t.timestamps
    end
  end
end
