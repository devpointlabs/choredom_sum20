class AddNewAttributesToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :points, :integer
    add_column :users, :role, :string
    add_column :users, :admin, :boolean
  end
end
