class CreateRewards < ActiveRecord::Migration[6.0]
  def change
    create_table :rewards do |t|
      t.string :reward_name
      t.string :reward_description
      t.integer :reward_cost
      t.boolean :reward_claimed
      t.boolean :reward_used
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
