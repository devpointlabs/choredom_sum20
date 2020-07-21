class AddFamIdToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :famId, :integer
  end
end
