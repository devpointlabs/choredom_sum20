class CreateFamgroups < ActiveRecord::Migration[6.0]
  def change
    create_table :famgroups do |t|
      t.string :last_name
      t.belongs_to :fam, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
