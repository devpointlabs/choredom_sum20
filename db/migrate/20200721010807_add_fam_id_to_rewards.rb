class AddFamIdToRewards < ActiveRecord::Migration[6.0]
  def change
    add_column :rewards, :famId, :integer
  end
end
