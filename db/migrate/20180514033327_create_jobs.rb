class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :mover, null: false
      t.date :move_date, null: false
      t.date :end_date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.integer :move_time, null: false
      t.integer :truck_id, null: false
      t.boolean :overnight, default: false
      t.timestamps
    end

    add_index :jobs, :truck_id
  end
end
