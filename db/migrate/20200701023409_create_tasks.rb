class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.string :task_description
      t.integer :task_value
      t.boolean :task_complete
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
